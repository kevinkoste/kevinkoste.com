import Link from 'next/link'
import Image from 'next/image'

import { Page, Head, Header, Footer } from '../components/Base'
import styles from './index.module.css'

const Home = () => {
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
        x: 2560,
        y: 1556,
      },
    },
  ]

  const blogItems = [
    {
      path: 'auth',
      title: 'Authentication: A Horror Story',
      subtitle: 'Seemingly endless troubles for an auth noob',
      image: {
        path: 'auth.png',
        x: 1000,
        y: 713,
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

        <div className={styles.headline}>
          <h2>Energy market analyst @ SCE ⚡️⚡️⚡️</h2>
          <br></br>
          <h2>At night: building consumer software 🔨🔨🔨</h2>
        </div>

        <h1 style={{ width: '100%' }}>Work</h1>
        <div className={styles.content}>
          {workItems.slice(0, 2).map(({ path, title, subtitle, image }) => (
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
        </div>

        <h1 style={{ width: '100%' }}>Blog</h1>
        <div className={styles.content}>
          {blogItems.slice(0, 2).map(({ path, title, subtitle, image }) => (
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
        </div>
      </main>

      <Footer />
    </Page>
  )
}

export default Home
