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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
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
        <Link href="/work">
          <a
            style={{
              textDecoration: router.pathname.startsWith('/work')
                ? 'underline'
                : 'unset',
            }}
          >
            Work
          </a>
        </Link>
        <Link href="/blog">
          <a
            style={{
              textDecoration: router.pathname.startsWith('/blog')
                ? 'underline'
                : 'unset',
            }}
          >
            Blog
          </a>
        </Link>
      </div>
    </header>
  )
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.creditbar}>
        <img
          src="/assets/icons/Headshot.png"
          alt="Headshot"
          className={styles.headshot}
        />
        <p>
          © Kevin Koste<br></br>2020 🚀
        </p>
      </div>
      <div className={styles.linkbar}>
        <a
          href="https://github.com/kevinkoste"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/icons/Github.svg"
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
            src="/assets/icons/Linkedin.svg"
            alt="LinkedIn Logo"
            className={styles.logo}
          />
        </a>
        <a
          href="mailto:kevinkoste@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/icons/Mail.svg"
            alt="Email Logo"
            className={styles.logo}
          />
        </a>
      </div>
    </footer>
  )
}
