import Link from 'next/link'
import Image from 'next/image'

import Head from 'next/head'
import { Page, Header, Footer } from '../../components/Base'
import { getAllItems } from '../../lib/markdown'
import styles from './index.module.css'

export async function getStaticProps() {
  const blogItems = getAllItems('content/_blog')

  return {
    props: { blogItems },
  }
}

const Blog = ({ blogItems }) => {
  return (
    <Page>
      <Head>
        <title>{'Kevin Koste | Blog'}</title>
        <meta name="description" content={blogItems[0]} />
      </Head>

      <Header />

      <main className={styles.main}>
        {blogItems.map(({ metadata }, idx) => (
          <Link href={`/blog/${metadata.slug}`} key={idx}>
            <div className={styles.item}>
              <div className={styles.card}>
                <h3>{metadata.title} &rarr;</h3>
                <p>{metadata.excerpt}</p>
              </div>
              <Image
                src={metadata.image}
                alt={metadata.slug}
                width={metadata.imageX}
                height={metadata.imageY}
                className={styles.image}
              />
            </div>
          </Link>
        ))}
      </main>

      <Footer />
    </Page>
  )
}

export default Blog
