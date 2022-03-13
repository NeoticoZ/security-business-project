import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <Loading dontShow={isLoaded} />

      <Component {...pageProps} />

      <GlobalStyles />
    </>
  );
}

export default MyApp;
