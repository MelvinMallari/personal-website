import Head from 'next/head'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Melvin Mallari Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a href="/" className="back-link">
        &#8592; home
      </a>

      <main className="container">
        <div className="project">
          <div className="img-wrapper">
            <img src="/green-arrow.gif" className="img" alt="" />
          </div>
          <ul className="list-first-level">
            <li>green arrow</li>
            <li>
              <p>
                a single page web application that allows users to buy and sell
                stocks with accurate real-time pricing. users are provided
                historical and intraday stock price fluctuation visualization
                and curated articles to inform their decision making. built with
                a react & redux frontend, ruby on rails backend, and postgresql
                database. integrates recharts.js, iex stock and news api.
                inspired by robinhood.
              </p>
            </li>
            <li>
              technologies
              <ul>
                <li>react</li>
                <li>redux</li>
                <li>ruby on rails</li>
                <li>postgresql</li>
                <li>recharts</li>
                <li>iex api</li>
              </ul>
            </li>
            <li>
              <a href="http://green-arrow-mm.herokuapp.com/#/">live link</a>
            </li>
          </ul>
        </div>

        <div className="project">
          <div className="img-wrapper">
            <img src="/CookieMon.gif" className="second img" alt="" />
          </div>
          <ul className="list-first-level">
            <li>cookie-mon</li>
            <li>
              <p>
                a remake of the classic game pac-man featuring the cookie
                monster. cookie-mon features sprite collision detection, and
                four path finding algorithms- one for each ghosts. the visual
                interface was built with html, canvas and css. the game logic
                was coded in pure javascript.
              </p>
            </li>
            <li>
              technologies
              <ul>
                <li>javascript</li>
                <li>html</li>
                <li>css</li>
                <li>canvas</li>
              </ul>
            </li>
            <li>
              <a href="https://melvinmallari.github.io/CookieMon/">live link</a>
            </li>
          </ul>
        </div>

        <div className="project">
          <div className="img-wrapper">
            <img src="/sweet_thumbnail.png" className="second img" alt="" />
          </div>
          <ul className="list-first-level">
            <li>sweet analytics</li>
            <li>
              <p>
                a portmanteau of sentiment tweet analytics. sweet Analytics was
                a group based MERN stack project. my primary role in the team
                was building out the capabilities to allow the inflow and
                storage of data through various api calls in the backend. i was
                able to achieve analysis across 7 tone categories by linking
                tweet data fetched using the twitter api with the ibm watson
                tone analyzer api. i then structured subsequent output to be
                interpretable for the data visualization team, gaining me
                familiarity to chart.js as well as experience in team git
                workflow.
              </p>
            </li>
            <li>
              technologies
              <ul>
                <li>mongodb</li>
                <li>express</li>
                <li>react</li>
                <li>node</li>
                <li>chart.js</li>
                <li>twitter api</li>
                <li>ibm watson tone analyzer api</li>
              </ul>
            </li>
            <li>
              <a href="https://github.com/rfoong8983/sweet_flex_project">
                live link
              </a>
            </li>
          </ul>
        </div>
      </main>

      <style jsx>{`
        p {
          margin: 5px 0;
        }

        .project:not(:first-of-type) {
          margin: 24px 0;
        }

        .list-first-level {
          padding-top: 16px;
          padding-left: 0;
          margin: 0 auto;
        }

        .container {
          margin: 0 auto;
        }

        .img-wrapper {
          background: #eee;
          height: 0;
          position: relative;
        }

        .img {
          height: auto;
          display: block;
          position: absolute;
        }

        .text-container {
          display: flex;
          justify-content: center;
        }

        .back-link {
          border-bottom: none;
          padding: 50px 0 0 65px;
          display: inline-block;
        }

        @media (min-width: 320px) {
          /* smartphones, iPhone, portrait 480x320 phones */
          .list-first-level {
            max-width: 320px;
          }

          .container {
            max-width: 320px;
          }

          .img-wrapper {
            padding-bottom: 213px;
          }

          .img {
            width: 320px;
          }
        }

        @media (min-width: 641px) {
          /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
          .list-first-level {
            max-width: 550px;
          }

          .container {
            max-width: 650px;
          }

          .img-wrapper {
            padding-bottom: 430px;
          }

          .img {
            width: 650px;
          }
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
          line-height: 1.5;
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
