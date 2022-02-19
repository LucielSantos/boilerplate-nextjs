import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React avançado - boilerplate</title>
        <link
          rel="shortcut icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-con"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styles Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
