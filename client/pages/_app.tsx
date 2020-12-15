import "styles/styles.scss";
import Footer from "components/Footer";
import Navigation from "components/Navbar";
import Head from "next/head";
import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
      <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    </>
  );
};

export default App;
