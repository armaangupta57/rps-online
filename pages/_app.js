import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Head>
          <title>Rock Paper Scissors Online | Guppy | Kreative</title>
          <meta name="description" content="Online rock paper scissors game by Guppy at Kreative" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp
