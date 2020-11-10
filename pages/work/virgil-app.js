import Image from 'next/image'

import { Page, Head, Header, Footer } from '../../components/Base'
import styles from './virgil-app.module.css'

const Home = () => {
  return (
    <Page>
      <Head>
        <title>Kevin Koste</title>
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.wrapper}>
          <h1>Virgil: A consumer credit card concept</h1>
          <p>
            This React Native app was built to demonstrate our team’s concept of
            a high-engagement card app. We drew design inspiration from Co-Star
            and Mr. Porter, and tried to mimic best practices in layout and
            navigation from leading personal finance apps.
          </p>
          {/* <div className={styles.fullbleed}>
            <Image
              src="/assets/virgil/web1.png"
              alt="Screenshot of virgil website 1"
              width={(window.innerHeight - 100) / 2}
              height={window.innerHeight - 100}
            />
          </div> */}

          <p>
            The app was mostly pure React Native, but we used some libraries to
            support svg animations. We developed the majority of the app using
            Expo, but we had to eject to use Plaid Link.
          </p>
          <p>
            We are still working on a version of this app that uses a Plaid Link
            integration to pull user spending data from an existing credit/debit
            card.
          </p>
        </div>
      </main>

      <Footer />
    </Page>
  )
}

export default Home
