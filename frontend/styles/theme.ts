import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"
import { PaletteOptions } from "@material-ui/core/styles/createPalette"
import { paleteState } from "state/theme"
import { useRecoilValue } from "recoil"

export const DEFAULT_PRIMARY: PaletteOptions["primary"] = {
  main: "#e36bae",
  light: "#f8a1d1",
  dark: "#b34180",
}

export const DEFAULT_SECONDARY: PaletteOptions["primary"] = {
  main: "#a4ebf3",
  light: "#ccf2f4",
  dark: "#aaaaaa",
}

export const getTheme = (
  palette: null | { primary: string; secondary: string } = null
) => {
  let primary: PaletteOptions["primary"], secondary: PaletteOptions["primary"]
  if (palette === null) primary = DEFAULT_PRIMARY
  else primary = { main: palette.primary }

  if (palette === null) secondary = DEFAULT_SECONDARY
  else secondary = { main: palette.secondary }

  const myTheme = createMuiTheme({
    palette: {
      primary,
      secondary,
      error: {
        main: red.A400,
      },
      background: {
        default: "#f4f9f9",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      h1: {
        fontWeight: 500,
      },
      h2: {
        fontWeight: 500,
      },
      fontFamily: `"Helvetica Neu", "NanumBarunGothic", "Roboto", "Helvetica", "Arial", sans-serif`,
      button: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
        fontWeight: 500,
      },
    },
  })
  return responsiveFontSizes(myTheme)
}
