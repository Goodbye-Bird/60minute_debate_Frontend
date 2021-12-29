import { IMessageProps } from "../../../Interface/Message/IMessage";

const Message: React.FC<IMessageProps> = ({
  message: { text, user },
  name,
}) => {
  return <div>{text}</div>;
};

export default Message;
