import clsx from "clsx"
import ColorPicker from "material-ui-color-picker"
import React from "react"
import { render } from "react-dom"
import { useRecoilState } from "recoil"
import { paleteState } from "state/theme"
import { useMarginStyles } from "styles/cssStyle"

import { Button, Theme, Typography } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"

import { FlexDiv } from "../styles/div"

const theme = () => {
  const [palette, setPalette] = useRecoilState(paleteState)
  const theme: Theme = useTheme()
  const mar = useMarginStyles()

  const onChangePrimaryColor = (color: string) => {
    setPalette({
      primary: color ? color : palette.primary,
      secondary: palette.secondary,
    })
  }

  const onChangeSecondaryColor = (color: string) => {
    setPalette({
      primary: palette.primary,
      secondary: color ? color : palette.secondary,
    })
  }

  return (
    <FlexDiv direction='column' height='60%'>
      <Typography className={mar.marBottom3} variant='h2'>
        Select your own Theme
      </Typography>
      <FlexDiv
        width='50%'
        justify='space-around'
        margin={theme.spacing(1, "auto")}>
        <Typography color='primary' variant='button'>
          Primary
        </Typography>
        <ColorPicker
          name='primary'
          defaultValue={"Click Here!"}
          value={palette.primary}
          onChange={onChangePrimaryColor}
          floatingLabelText='select the color'
          // floatingLabelText='select the color'
        />
        <Button color='primary' variant='contained'>
          Primary
        </Button>
      </FlexDiv>
      <FlexDiv
        width='50%'
        justify='space-around'
        margin={theme.spacing(1, "auto")}>
        <Typography color='secondary' variant='button'>
          Secondary
        </Typography>
        <ColorPicker
          name='secondary'
          defaultValue={"Click Here!"}
          onChange={onChangeSecondaryColor}
          hintText='test'
          floatingLabelText='select the color'
        />
        <Button color='secondary' variant='contained'>
          Secondary
        </Button>
      </FlexDiv>
    </FlexDiv>
  )
}

export default theme
