import { useState } from "react";
import { IMessageProps } from "../../../Interface/Message/IMessage";
import { MessageContainer } from "./Message.style";

const Message: React.FC<IMessageProps> = ({
  message: { text, user },
  name,
}) => {
  const [isMe, setIsMe] = useState<boolean>(user === name);
  console.log(user, name, user === name);

  return <MessageContainer isMe={user === name}>{text}</MessageContainer>;
};

export default Message;
