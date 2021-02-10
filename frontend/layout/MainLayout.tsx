import _ from "lodash"
import React, { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { paleteState, themeState } from "state/theme"
import styled from "styled-components"
import { getTheme } from "styles/theme"

import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import { StylesProvider, ThemeProvider, useTheme } from "@material-ui/styles"
import Layout, {
  getCollapseBtn,
  getContent,
  getDrawerSidebar,
  getFooter,
  getHeader,
  getSidebarContent,
  getSidebarTrigger,
  Root,
} from "@mui-treasury/layout"
import {
  ContentMockUp,
  FooterMockUp,
  HeaderMockUp,
  NavContentMockUp,
  NavHeaderMockUp,
} from "@mui-treasury/mockup/layout"
import NavContent from "navigation/NavContent"
import NavHeader from "navigation/NavHeader"
import MainHeader from "components/MainHeader"
import { makeStyles } from "@material-ui/core"

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const Footer = getFooter(styled)

const scheme = Layout()

scheme.configureHeader((builder) => {
  builder
    .registerConfig("xs", {
      position: "sticky",
    })
    .registerConfig("md", {
      position: "relative", // won't stick to top when scroll down
    })
})

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("unique_id", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      width: "auto", // 'auto' is only valid for temporary variant
    })
    .registerPermanentConfig("md", {
      width: 256, // px, (%, rem, em is compatible)
      collapsible: true,
      collapsedWidth: 64,
    })
})

scheme.enableAutoCollapse("unique_id", "md")

const DEFAULT_THEME = getTheme()

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: theme.palette.primary.main,
  },
}))

const MainLayout = ({ children }) => {
  const [palette, setPalette] = useRecoilState(paleteState)
  const changingTheme = useRecoilValue(themeState)
  const [theme, setTheme] = useState(DEFAULT_THEME)
  const st = useStyles()

  useEffect(() => {
    setTheme(_.cloneDeep(changingTheme))
  }, [changingTheme])

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Root theme={theme} scheme={scheme}>
          {({ state: { sidebar } }) => (
            <>
              <CssBaseline />
              <Header color='primary'>
                <Toolbar className={st.toolbar}>
                  <SidebarTrigger color='secondary' sidebarId='unique_id' />
                  <MainHeader />
                </Toolbar>
              </Header>
              <DrawerSidebar sidebarId='unique_id'>
                <SidebarContent>
                  <NavHeader collapsed={sidebar.unique_id.collapsed} />
                  <NavContent />
                </SidebarContent>
                <CollapseBtn />
              </DrawerSidebar>
              <Content>{children}</Content>
              <Footer>
                <FooterMockUp />
              </Footer>
            </>
          )}
        </Root>
        <CssBaseline />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default MainLayout
