import { atom } from "recoil";

export const debateList = atom<boolean[] | undefined>({
  key: "debateList",
  default: [],
});
