import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>First website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my first web." />
        <p className="description">
          Let's go edit code together on <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
