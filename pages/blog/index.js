import Link from 'next/link'
import Image from 'next/image'

import { Page, Head, Header, Footer } from '../../components/Base'

import styles from './index.module.css'

const Blog = () => {
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

        {blogItems.map(({ path, title, subtitle, image }) => (
          <Link href={`/blog/${path}`}>
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

export default Blog
