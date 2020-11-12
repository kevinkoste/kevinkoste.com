import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import './_app.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('ECJIK', {
      includedDomains: ['kevinkoste.com'],
      url: 'https://fathom-6xg9.onrender.com/tracker.js',
    })

    console.log('in fathom loader')

    const onRouteChangeComplete = () => {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return <Component {...pageProps} />
}

export default App
