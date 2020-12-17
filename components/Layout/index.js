import Head from 'next/head'

import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Layout({
  children,
  title='GardenG',
}){
  return(
    <div>
      <style jsx global>{`
        html,
        body {
          font-family: Poppins, sans-serif;
          color: red;
        }
      `}</style>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      {children}
      <Footer></Footer>

    </div>
  )
}