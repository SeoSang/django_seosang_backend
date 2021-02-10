import { StylesProvider, ThemeProvider } from "@material-ui/core/styles"
import MainLayout from "layout/MainLayout"
import Head from "next/head"
import React, { useEffect } from "react"
import { RecoilRoot, useRecoilState } from "recoil"
import "../styles/globals.css"

import { getTheme } from "../styles/theme"

const DEFAULT_THEME = getTheme()

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <StylesProvider injectFirst>
        <ThemeProvider theme={DEFAULT_THEME}>
          <RecoilRoot>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </RecoilRoot>
        </ThemeProvider>
      </StylesProvider>
    </React.Fragment>
  )
}

export default MyApp
