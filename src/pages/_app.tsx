import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <Component {...pageProps} />}

      <GlobalStyles />
    </>
  );
}

export default MyApp;
