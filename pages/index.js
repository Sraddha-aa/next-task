import Script from 'next/script';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
      <Script       
  src={`https://cdn-cookieyes.com/client_data/website key/script.js`}>
  </Script>
  strategy="beforeInteractive"
        <title>Simple Next.js Project</title>
        <meta name="description" content="A simple Next.js project example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello, Next.js!</h1>
        <p>This is a simple Next.js project example.</p>
      </main>

      <footer>
        <p>Made with ❤️ by Your Name</p>
      </footer>
    </div>
  )
}
