import Footer from '@/componenets/Footer'
import Navbar from '@/componenets/navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

const monserat = Montserrat({
  subsets:["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/profile/logo.png" />
    </Head>
    <main className={`${monserat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
    <Navbar/>
      <Component {...pageProps} />
    </main>
    <Footer/>
    </>
  )
}
