import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

import "../styles/index.css";
import { AppProvider } from "../contexts/appContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
