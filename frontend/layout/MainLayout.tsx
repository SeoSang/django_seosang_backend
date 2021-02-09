import React, { useEffect, useState } from "react"
import Head from "next/head"
import styled from "styled-components"
import _ from "lodash"

import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider, StylesProvider, Theme } from "@material-ui/core/styles"
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
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

import { getTheme } from "../styles/theme"
import NavHeader from "../navigation/NavHeader"
import NavContent from "../navigation/NavContent"
import MainHeader from "../components/Header"
import { createStyles, makeStyles } from "@material-ui/styles"
import { paleteState, themeState } from "state/theme"

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const Footer = getFooter(styled)

const useStyles = (custom: Theme) =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: custom.palette.primary.main,
      },
    })
  )

const DEFAULT_THEME = getTheme()

const MainLayout = ({ children }) => {
  const [palette, setPalette] = useRecoilState(paleteState)
  const changingTheme = useRecoilValue(themeState)
  const [theme, setTheme] = useState(DEFAULT_THEME)

  useEffect(() => {
    setTheme(_.cloneDeep(changingTheme))
  }, [changingTheme])

  return (
    // <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {/* <Root scheme={getStandardScheme()}> */}
      {/* {({ state: { sidebar } }) => ( */}
      {/* <> */}
      {/* <MainHeader /> */}
      {/* <DrawerSidebar sidebarId='primarySidebar'> */}
      {/* <SidebarContent> */}
      {/* <NavHeader collapsed={sidebar.primarySidebar.collapsed} /> */}
      {/* <NavContent /> */}
      {/* </SidebarContent> */}
      {/* <CollapseBtn /> */}
      {/* </DrawerSidebar> */}
      {/* <Content> */}
      {children}
      {/* </Content> */}
      {/* <Footer>Footer</Footer> */}
      {/* </> */}
      {/* )} */}
      {/* </Root> */}
    </ThemeProvider>
    // </StylesProvider>
  )
}

export default MainLayout
