import Link from 'next/link'
import Image from 'next/image'

import Head from 'next/head'
import { Page, Header, Footer } from '../../components/Base'
import { getAllItems } from '../../lib/markdown'
import styles from './index.module.css'

export async function getStaticProps() {
  const workItems = getAllItems('content/_work')

  return {
    props: { workItems },
  }
}

const Work = ({ workItems }) => {
  return (
    <Page>
      <Head>
        <title>{'Kevin Koste | Work'}</title>
        <meta name="description" content={workItems[0]} />
      </Head>

      <Header />

      <main className={styles.main}>
        {workItems.map(({ metadata }, idx) => (
          <Link href={`/work/${metadata.slug}`} key={idx}>
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
                unoptimized
              />
            </div>
          </Link>
        ))}
      </main>

      <Footer />
    </Page>
  )
}

export default Work
