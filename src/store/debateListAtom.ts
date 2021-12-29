import { atom } from "recoil";

export const debateList = atom<any[]>({
  key: "debateList",
  default: [],
});
