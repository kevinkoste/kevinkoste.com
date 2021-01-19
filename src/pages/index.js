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

      <Header />

      <main className={styles.main}>
        <div className={styles.headline}>
          <h2>
            Hi! I'm a full-stack engineer and energy market analyst at Southern
            California Edison, where I build revenue optimization software for
            energy storage assets.
            <br></br>
            <br></br>
            On nights and weekends, I build consumer products & developer tools
            like Virgil and Blobber.
            <br></br>
            <br></br>
            🔨 ⚡️ 🔨 ⚡️ 🔨 ⚡️
          </h2>
        </div>

        <Link href={`/work`}>
          <h1>Work</h1>
        </Link>
        <div className={styles.content}>
          {workItems.map(({ metadata }, idx) => (
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
                  className={styles.image}
                />
              </div>
            </Link>
          ))}
        </div>

        <Link href={`/blog`}>
          <h1>Blog</h1>
        </Link>
        <div className={styles.content}>
          {blogItems.map(({ metadata }, idx) => (
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
                  className={styles.image}
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
