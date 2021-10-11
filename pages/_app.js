import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import i18n from "i18n";

import store from "redux/store";
import NProgress from "nprogress";
import "antd/dist/antd.css";
import "scss/styles.scss";
import LoadingScreen from "components/LoadingScreen";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  //LOADING
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div id="dzb-progress-bar" />

        <Component {...pageProps} />
      </Provider>
    </I18nextProvider>
  );
}
