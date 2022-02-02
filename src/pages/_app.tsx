import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const DarkmodeCtx = dynamic(() => import("../context/darkmode"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkmodeCtx>
      <Component {...pageProps} />
    </DarkmodeCtx>
  );
}

export default MyApp;
