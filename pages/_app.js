import Head from "next/head";
import "../styles/globals.css";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head class="header">
        <title>공수 계산기</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <Header />

        <div className="contents inner">
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default MyApp;
