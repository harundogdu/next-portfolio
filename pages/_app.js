import "../styles/globals.css";
import { MainContextProvider } from "context/mainContext";

function MyApp({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <Component {...pageProps} />
    </MainContextProvider>
  );
}
export default MyApp;
