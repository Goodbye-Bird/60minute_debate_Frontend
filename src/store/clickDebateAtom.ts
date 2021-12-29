import { atom } from "recoil";

export const clickDebateAtom = atom<number[]>({
  key: "clickDebateAtom",
  default: [],
});
