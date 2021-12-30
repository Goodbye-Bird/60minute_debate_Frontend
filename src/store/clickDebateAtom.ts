import { atom } from "recoil";

export const clickDebateAtom = atom<number[]>({
  key: "clickDebateAtom",
  default: [],
});

export const currentClickDebate = atom<number>({
  key: "currentClickDebate",
  default: 0,
});

export const debateText = atom<string>({
  key: "debateText",
  default: "",
});

export const debateName = atom<string>({
  key: "debateName",
  default: "",
});
