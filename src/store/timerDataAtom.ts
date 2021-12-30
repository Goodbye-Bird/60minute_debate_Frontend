import { atom } from "recoil";
import { ITimeProps } from "../Interface/Time/ITme";

export const timeData = atom<ITimeProps>({
  key: "timeData",
  default:{
     time: "loading",
  }
});
