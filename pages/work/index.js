import Link from 'next/link'
import Image from 'next/image'

import { Page, Head, Header, Footer } from '../../components/Base'
import styles from './index.module.css'

const Work = () => {
  const workItems = [
    {
      path: 'virgil-app',
      title: 'Virgil Mobile App',
      subtitle: 'An experiment with high-engagement fintech',
      image: {
        path: 'virgil/mobile-app.png',
        x: 1302,
        y: 759,
      },
    },
    {
      path: 'virgil-landing-page',
      title: 'virgilcard.com',
      subtitle: 'Landing page for a consumer charge card',
      image: {
        path: 'virgil/website-1.png',
        x: 1302,
        y: 759,
      },
    },
  ]

  return (
    <Page>
      <Head>
        <title>Kevin Koste</title>
      </Head>

      <main className={styles.main}>
        <Header />

        {workItems.map(({ path, title, subtitle, image }) => (
          <Link href={`/work/${path}`}>
            <div className={styles.item}>
              <div className={styles.card}>
                <h3>{title} &rarr;</h3>
                <p>{subtitle}</p>
              </div>
              <div className={styles.image}>
                <Image
                  src={`/assets/${image.path}`}
                  alt="Screenshot of virgil website 1"
                  width={image.x}
                  height={image.y}
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

export default Work
