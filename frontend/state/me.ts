import { atom, selector, useRecoilValue } from "recoil"
import { getTheme } from "styles/theme"

export const me = atom({
  key: "me",
  default: {},
})

export const isLoginedState = atom({
  key: "isLogined",
  default: false,
})
