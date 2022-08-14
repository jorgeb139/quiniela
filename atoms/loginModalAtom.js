import { atom } from "recoil"

export const openLoginState = atom({
  key: "openLoginState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})
