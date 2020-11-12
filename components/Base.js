import NextHead from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Base.module.css'

export const Page = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export const Head = ({ children }) => {
  return (
    <NextHead>
      <meta
        name="Kevin Koste's website"
        content="Kevin Koste personal portfolio and blog"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
        crossOrigin="anonymous"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
        crossOrigin="anonymous"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
        crossOrigin="anonymous"
      />
      <link
        rel="manifest"
        href="/favicon/site.webmanifest"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Inter-Regular-slnt=0.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      {children}
    </NextHead>
  )
}

export const Header = () => {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Kevin Koste</a>
      </Link>
      <div className={styles.navbar}>
        {['work', 'blog'].map((value) => (
          <Link href={`/${value}`}>
            <a
              style={{
                borderBottom: router.pathname.startsWith(`/${value}`)
                  ? '1px solid'
                  : '',
              }}
            >
              {value}
            </a>
          </Link>
        ))}
      </div>
    </header>
  )
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img
          src="/icons/Headshot.png"
          alt="Headshot"
          className={styles.headshot}
        />
        <p>
          © Kevin Koste<br></br>2020 🚀
        </p>
      </div>
      <div>
        <a
          href="https://github.com/kevinkoste"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/Github.svg"
            alt="GitHub Logo"
            className={styles.logo}
          />
        </a>
        <a
          href="https://linkedin.com/in/kevinkoste"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/Linkedin.svg"
            alt="LinkedIn Logo"
            className={styles.logo}
          />
        </a>
        <a
          href="mailto:kevinkoste@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/Mail.svg" alt="Email Logo" className={styles.logo} />
        </a>
      </div>
    </footer>
  )
}
