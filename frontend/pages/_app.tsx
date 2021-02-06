import React from "react"
import Head from "next/head"
import styled from "styled-components"

import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles"
import { ChevronLeft, MenuRounded, ChevronRight } from "@material-ui/icons"
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
} from "@mui-treasury/layout"

import {
  getDefaultScheme,
  getStandardScheme,
  getFixedScheme,
  getContentBasedScheme,
  getCozyScheme,
  getMuiTreasuryScheme,
} from "@mui-treasury/layout/presets"

import theme from "../styles/theme"
import NavHeader from "../navigation/NavHeader"
import NavContent from "../navigation/NavContent"
import MainHeader from "../components/Header"

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const Footer = getFooter(styled)

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
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
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Root scheme={getStandardScheme()}>
            {({ state: { sidebar } }) => (
              <>
                <Header>
                  <Toolbar>
                    <SidebarTrigger sidebarId='primarySidebar' />
                    <MainHeader />
                  </Toolbar>
                </Header>
                <DrawerSidebar sidebarId='primarySidebar'>
                  <SidebarContent>
                    <NavHeader collapsed={sidebar.primarySidebar.collapsed} />
                    <NavContent />
                  </SidebarContent>
                  <CollapseBtn />
                </DrawerSidebar>
                <Content>
                  <Component {...pageProps} />
                </Content>
                <Footer>Footer</Footer>
              </>
            )}
          </Root>
        </ThemeProvider>
      </StylesProvider>
    </React.Fragment>
  )
}

export default MyApp
