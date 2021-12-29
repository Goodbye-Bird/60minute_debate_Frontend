import { atom } from "recoil";
import { IMessage } from "../Interface/Message/IMessage";

export const MessageData = atom<IMessage[]>({
  key: "MessageData",
  default: [],
});
