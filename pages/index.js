import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Melvin Mallari</title>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          👋🏽&nbsp;my name is melvin. i'm a software engineer working on{' '}
          <a href="https://www.withkindred.com/">kindred</a>.
        </p>
        <p>
          in the past, i've studied mechanical engineering and designed
          mechanical systems.
        </p>
        <p>my current side project: 🔧 wrenching on a 1995 e36 m3.</p>
        <p>
          chat with me about{' '}
          <a href="https://www.notion.so/872c49c4fb664add9b27e47b106aec79?v=30808d0d621e4620a679e4e6f748006d">
            reading
          </a>
          , power-lifting, and personal finance.
        </p>
        <p>melvintmallari@gmail.com</p>
        <p>
          <a href="/projects">projects</a>
        </p>
        <p>
          <a href="https://github.com/MelvinMallari">github</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/melvinmallari/">linkedin</a>
        </p>
      </main>

      <footer></footer>

      <style jsx>{`
        main {
          padding: 50px 65px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'PT Sans', sans-serif;
          color: #333;
          -webkit-font-smoothing: antialiased;
          font-size: 15px;
        }

        a {
          color: #99bde0;
          text-decoration: none;
          border-bottom: 1px solid #99bde0;
        }

        a:hover {
          color: #337ab7;
          border-bottom: 1px solid #337ab7;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
