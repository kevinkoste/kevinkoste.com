// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
// import * as Fathom from 'fathom-client'

import './_app.css'

const App = ({ Component, pageProps }) => {
  // const router = useRouter()

  // useEffect(() => {
  //   // Initialize Fathom when the app loads
  //   Fathom.load('ECJIK', {
  //     // url: '/tracker.js',
  //     includedDomains: ['kevinkoste.com'],
  //   })

  //   console.log('in fathom loader, window.fathom is:', window.fathom)

  //   const onRouteChangeComplete = () => {
  //     Fathom.trackPageview()
  //   }
  //   // Record a pageview when route changes
  //   router.events.on('routeChangeComplete', onRouteChangeComplete)

  //   // Unassign event listener
  //   return () => {
  //     router.events.off('routeChangeComplete', onRouteChangeComplete)
  //   }
  // }, [router])

  return <Component {...pageProps} />
}

export default App
