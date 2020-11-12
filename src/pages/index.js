import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Page, Header, Footer } from '../components/Base'
import { getAllItems } from '../lib/markdown'
import styles from './index.module.css'

export async function getStaticProps() {
  const blogItems = getAllItems('content/_blog')
  const workItems = getAllItems('content/_work')

  return {
    props: { blogItems, workItems },
  }
}

const Home = ({ workItems, blogItems }) => {
  return (
    <Page>
      <Head>
        <title>Kevin Koste</title>
        <meta
          name="description"
          content="Kevin Koste's personal portfolio and blog"
        />
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.headline}>
          <h2>
            Day &rarr; building a reliable & cost-effective electric grid for
            California @ SCE ⚡️ ⚡️ ⚡️
            <br></br>
            <br></br>
            Night &rarr; building consumer software 🔨 🔨 🔨
          </h2>
        </div>

        <h1>Work</h1>
        <div className={styles.content}>
          {workItems.slice(0, 2).map(({ metadata }, idx) => (
            <Link href={`/work/${metadata.slug}`} key={idx}>
              <div className={styles.item}>
                <div className={styles.card}>
                  <h2>{metadata.title} &rarr;</h2>
                  <p>{metadata.excerpt}</p>
                </div>
                <Image
                  src={metadata.image}
                  alt={metadata.slug}
                  width={metadata.imageX}
                  height={metadata.imageY}
                  unoptimized
                />
              </div>
            </Link>
          ))}
        </div>

        <h1>Blog</h1>
        <div className={styles.content}>
          {blogItems.slice(0, 2).map(({ metadata }, idx) => (
            <Link href={`/blog/${metadata.slug}`} key={idx}>
              <div className={styles.item}>
                <div className={styles.card}>
                  <h2>{metadata.title} &rarr;</h2>
                  <p>{metadata.excerpt}</p>
                </div>
                <Image
                  src={metadata.image}
                  alt={metadata.slug}
                  width={metadata.imageX}
                  height={metadata.imageY}
                  unoptimized
                />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </Page>
  )
}

export default Home
