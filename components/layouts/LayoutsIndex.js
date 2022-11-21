import Head from "next/head"
import { Footer } from "../locksmithkeys/Footer"
import { Header } from "../locksmithkeys/Header"

// import { Footer } from "../guitarla/Footer"
// import { Header } from "../guitarla/Header"

export const LayoutsIndex = ({children, page='', title='', description = ''}) => {
  return (
    <>
        <Head>
            <title>{title} {page}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        {children}

        <Footer />
    </>
  )
}
