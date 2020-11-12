import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(f, a, t, h, o, m){
                a[h]=a[h]||function(){
                  (a[h].q=a[h].q||[]).push(arguments)
                };
                o=f.createElement('script'),
                m=f.getElementsByTagName('script')[0];
                o.async=1; o.src=t; o.id='fathom-script';
                m.parentNode.insertBefore(o,m)
              })(document, window, '//fathom-6xg9.onrender.com/tracker.js', 'fathom');
              fathom('set', 'siteId', 'ECJIK');
              fathom('trackPageview');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
