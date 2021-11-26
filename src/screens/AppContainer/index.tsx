import Head from "next/head";
import React from "react";

import "tailwindcss/tailwind.css";
import Footer from "./components/Footer";
import Fullscreen from "./components/Fullscreen";

const AppContainer = ({ Component, pageProps }) => {
  return (
    <Fullscreen>
      <Head>
        <title>Pastetry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      <Footer />
    </Fullscreen>
  );
};

export default AppContainer;
