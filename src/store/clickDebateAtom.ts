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

interface IdebateRoomListProps {
  name: string;
  room: string;
  time: number;
}

export const debateRoomList = atom<IdebateRoomListProps[]>({
  key: "debateRoomList",
  default: [],
});
