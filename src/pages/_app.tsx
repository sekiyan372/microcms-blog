import '~/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Footer from '~/components/Footer'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
