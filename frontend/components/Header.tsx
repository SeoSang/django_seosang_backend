import PropTypes from "prop-types"
import React from "react"
import { paleteState } from "state/theme"
import { useTypicalStyles } from "styles/cssStyle"

import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"
import InputBase from "@material-ui/core/InputBase"
import { styled, withStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { isWidthUp } from "@material-ui/core/withWidth"
import { Styles } from "@material-ui/styles"
import { getHeader } from "@mui-treasury/layout"
import { useRecoilState } from "recoil"

const Header = getHeader(styled)

const styles: any = ({
  spacing,
  transitions,
  breakpoints,
  palette,
  shape,
}) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[200],
    "&:hover": {
      background: palette.grey[300],
    },
    marginLeft: 0,
    width: "100%",
    [breakpoints.up("sm")]: {
      marginLeft: spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create("width"),
    width: "100%",
    [breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
})

const MainHeader = ({ classes, screen }) => {
  const [palette, setPalette] = useRecoilState(paleteState)
  const sty = useTypicalStyles()

  return (
    <>
      <Header className={sty.priMainBack}>
        <Toolbar className={sty.priMainBack}>
          <Typography noWrap color={"textSecondary"} className={classes.header}>
            Title
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Icon>search</Icon>
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          {screen === "xs" && (
            <IconButton>
              <Icon>more_vert</Icon>
            </IconButton>
          )}
          {screen === "sm" && (
            <>
              <IconButton>
                <Icon>favorite</Icon>
              </IconButton>
              <IconButton>
                <Icon>more_vert</Icon>
              </IconButton>
            </>
          )}
          {isWidthUp("md", screen) && (
            <Toolbar>
              <IconButton>
                <Icon>favorite</Icon>
              </IconButton>
              <IconButton>
                <Icon>phone</Icon>
              </IconButton>
              <IconButton>
                <Icon>camera</Icon>
              </IconButton>
            </Toolbar>
          )}
        </Toolbar>
      </Header>
    </>
  )
}

MainHeader.propTypes = {
  screen: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
}
MainHeader.defaultProps = {
  screen: null,
}

export default withStyles(styles)(MainHeader)
