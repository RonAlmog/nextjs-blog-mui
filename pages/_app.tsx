import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Header from "../components/layout/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header mode={"light"} onChange={() => {}} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
