import { atom } from "recoil";
import { IUserDataProps } from "../Interface/Register/registerInterface";
export const userInfo = atom<IUserDataProps>({
  key: "userInfo",
  default: {
    name: "",
    email: "",
    pw: "",
    checkPw: "",
  },
});
