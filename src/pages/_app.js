import store from '@/redux/store'
import '@/styles/globals.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Head>
          {/* Set the favicon */}
          <link rel="icon" href="https://i.ibb.co/dK1PfqF/pcbuilder-Header.png" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
