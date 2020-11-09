import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.css'

const Header = () => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>Kevin Koste</a>
      </Link>
      <div className={styles.navbar}>
        <Link href="/work">
          <a style={{ color: router.pathname === '/work' ? 'red' : 'black' }}>
            Work
          </a>
        </Link>
        <Link href="/blog">
          <a style={{ color: router.pathname === '/blog' ? 'red' : 'black' }}>
            Blog
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
