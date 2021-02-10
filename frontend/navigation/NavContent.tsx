import React, { useEffect, useState } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Icon from "@material-ui/core/Icon"
import Divider from "@material-ui/core/Divider"
import { useRecoilValue } from "recoil"

import { isLoginedState } from "../state/me"
import { PageLink } from "util/PageLink"

const loginedList = [
  {
    primaryText: "My Files",
    icon: "folder",
    link: "/",
  },
  {
    primaryText: "Shared with me",
    icon: "people",
    link: "/",
  },
  {
    primaryText: "Starred",
    icon: "star",
    link: "/",
  },
  {
    primaryText: "Recent",
    icon: "schedule",
    link: "/",
  },
  {
    primaryText: "Offline",
    icon: "offline_pin",
    link: "/",
  },
  {
    primaryText: "Uploads",
    icon: "publish",
    link: "/",
  },
  {
    primaryText: "Backups",
    icon: "backup",
    link: "/",
  },
]

const notLoginedList = [
  {
    primaryText: "Login",
    icon: "person",
    link: "/login",
  },
  {
    primaryText: "Register",
    icon: "input",
    link: "/register",
  },
]

const NavContent = () => {
  const isLogined = useRecoilValue(isLoginedState)
  const [navList, setNavList] = useState(notLoginedList)

  useEffect(() => {
    if (isLogined) setNavList(loginedList)
    else setNavList(notLoginedList)
  }, [isLogined])

  return (
    <List>
      {navList.map(({ primaryText, icon, link }, i) => (
        <PageLink href={link}>
          <ListItem key={primaryText} selected={i === 0} button>
            <ListItemIcon>
              <Icon color='secondary'>{icon}</Icon>
            </ListItemIcon>
            <ListItemText
              primary={primaryText}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
        </PageLink>
      ))}
      <Divider style={{ margin: "12px 0" }} />
      <PageLink href='theme'>
        <ListItem button>
          <ListItemIcon>
            <Icon color='secondary'>settings</Icon>
          </ListItemIcon>
          <ListItemText
            primary={"Settings & account"}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      </PageLink>
    </List>
  )
}

export default NavContent
