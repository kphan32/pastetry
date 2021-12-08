import Head from "next/head";
import React from "react";

import "tailwindcss/tailwind.css";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Fullscreen from "./components/Fullscreen";

const AppContainer = ({ Component, pageProps }) => {
  return (
    <Fullscreen>
      <Head>
        <title>Pastetry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background />

      <Component {...pageProps} />

      <Footer />
    </Fullscreen>
  );
};

export default AppContainer;
