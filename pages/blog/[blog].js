import { Page, Head, Header, Footer } from '../../components/Base'
import { getItemBySlug, getAllItems, markdownToHtml } from '../../lib/markdown'
import styles from './[blog].module.css'

const Blog = ({ metadata, html }) => {
  return (
    <Page>
      <Head>
        <title>Kevin Koste</title>
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.wrapper}>
          <h4>{metadata.date}</h4>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>

      <Footer />
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const { metadata, content } = getItemBySlug('content/_blog', params.blog)
  const html = await markdownToHtml(content || '')

  return {
    props: {
      metadata,
      html,
    },
  }
}

export async function getStaticPaths() {
  const items = getAllItems('content/_blog')

  return {
    paths: items.map((item) => '/blog/' + item.metadata.slug),
    fallback: false,
  }
}

export default Blog
