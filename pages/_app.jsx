import "styles/global.scss";
import Footer from "components/footer";
import Navigation from "components/navigation";
import Head from "next/head";
import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="CardCollab is a revolutionary new way to collaborate with friends to create flashcards and notes"
        ></meta>
      </Head>
      <Navigation />
      <Component />
      <Footer />
      <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    </>
  );
};

export default App;
