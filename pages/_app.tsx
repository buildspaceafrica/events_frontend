import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import "../styles/index.css";
import { AppProvider } from "../contexts/appContext";
import { MintingProvider } from "../contexts/mintingContext";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <MintingProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </MintingProvider>
    </>
  );
}

export default MyApp;