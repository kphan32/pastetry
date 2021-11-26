import Head from "next/head";
import React from "react";

import "tailwindcss/tailwind.css";

const AppContainer = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Pastetry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
};

export default AppContainer;
