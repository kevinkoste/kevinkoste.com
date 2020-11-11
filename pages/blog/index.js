import Link from 'next/link'
import Image from 'next/image'

import { Page, Head, Header, Footer } from '../../components/Base'
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
        <title>Kevin Koste</title>
      </Head>

      <main className={styles.main}>
        <Header />

        {blogItems.slice(0, 2).map(({ metadata }, idx) => (
          <Link href={`/blog/${metadata.slug}`} key={idx}>
            <div className={styles.item}>
              <div className={styles.card}>
                <h3>{metadata.title} &rarr;</h3>
                <p>{metadata.excerpt}</p>
              </div>
              <div className={styles.image}>
                <Image
                  src={metadata.image}
                  alt={metadata.slug}
                  width={metadata.imageX}
                  height={metadata.imageY}
                />
              </div>
            </div>
          </Link>
        ))}
      </main>

      <Footer />
    </Page>
  )
}

export default Blog
