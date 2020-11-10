import Link from 'next/link'
import Image from 'next/image'

import { Page, Head, Header, Footer } from '../components/Base'
import { getAllItems } from '../lib/markdown'
import styles from './index.module.css'

const Home = ({ workItems, blogItems }) => {
  return (
    <Page>
      <Head>
        <title>Kevin Koste</title>
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.headline}>
          <h2>Energy market analyst @ SCE ⚡️⚡️⚡️</h2>
          <br></br>
          <h2>At night: building consumer software 🔨🔨🔨</h2>
        </div>

        <h1 style={{ width: '100%' }}>Work</h1>
        <div className={styles.content}>
          {workItems.slice(0, 2).map(({ metadata }, idx) => (
            <Link href={`/work/${metadata.slug}`} key={idx}>
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
        </div>

        <h1 style={{ width: '100%' }}>Blog</h1>
        <div className={styles.content}>
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
        </div>
      </main>

      <Footer />
    </Page>
  )
}

export async function getStaticProps() {
  const blogItems = getAllItems('_blog')
  const workItems = getAllItems('_work')

  return {
    props: { blogItems, workItems },
  }
}

export default Home
