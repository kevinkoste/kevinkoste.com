import { Page, Head, Header, Footer } from '../../components/Base'
import { getItemBySlug, getAllItems, markdownToHtml } from '../../lib/markdown'
import styles from './[work].module.css'

export async function getStaticProps({ params }) {
  const { metadata, content } = getItemBySlug('content/_work', params.work)
  const html = await markdownToHtml(content || '')

  return {
    props: {
      metadata,
      html,
    },
  }
}

export async function getStaticPaths() {
  const items = getAllItems('content/_work')

  return {
    paths: items.map((item) => '/work/' + item.metadata.slug),
    fallback: false,
  }
}

const Work = ({ metadata, html }) => {
  return (
    <Page>
      <Head>
        <title>{'Kevin Koste - ' + metadata.title}</title>
        <meta
          name="description"
          content={metadata.title + ': ' + metadata.excerpt}
        />
      </Head>

      <main className={styles.main}>
        <Header />

        <div
          className={styles.wrapper}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>

      <Footer />
    </Page>
  )
}

export default Work
