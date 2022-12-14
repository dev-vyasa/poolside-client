import "../styles/globals.css";
import { ContextProvider } from "../context/TransactionContext";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
