import { AppProps } from 'next/app'
import Head from 'next/head'
import pkg from 'package.json'
import React from 'react'
import 'styles/index.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>tailwind-cremonatv v{pkg.version}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
