import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.creditbar}>
        <img
          src="/assets/Headshot.png"
          alt="Headshot"
          className={styles.headshot}
        />
        <p>
          © Kevin Koste / 2020<br></br>Next.js on Netlify
        </p>
      </div>
      <div className={styles.linkbar}>
        <a
          href="https://github.com/kevinkoste"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/Github.svg"
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
            src="/assets/Linkedin.svg"
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
            src="/assets/Mail.svg"
            alt="Email Logo"
            className={styles.logo}
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
