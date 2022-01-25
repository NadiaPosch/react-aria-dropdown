import { SSRProvider } from "@react-aria/ssr";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SSRProvider>
            <Head>
                <title>React Aria Dropdown Example</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </SSRProvider>
    );
}

export default MyApp;
