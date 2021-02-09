import { atom, selector, useRecoilValue } from "recoil"
import { getTheme } from "styles/theme"

export const paleteState = atom({
  key: "paleteState",
  default: {
    primary: "#e36bae",
    secondary: "#a4ebf3",
  },
})

export const themeState = selector({
  key: "themeState",
  get: ({ get }) => {
    const palette = get(paleteState)
    return getTheme(palette)
  },
})
