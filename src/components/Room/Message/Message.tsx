import { IMessageProps } from "../../../Interface/Message/IMessage";
import {
  MessageContainer,
  MessageText,
  MessageUserImg,
  MessageUserName,
  MessageUserWrap,
  MessageWrap,
} from "./Message.style";

const Message: React.FC<IMessageProps> = ({
  message: { text, user },
  name,
}) => {
  return (
    <MessageContainer>
      {user !== name && (
        <MessageUserWrap>
          <MessageUserImg
            src={
              "https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg"
            }
          />
          <MessageUserName>{user}</MessageUserName>
        </MessageUserWrap>
      )}
      <MessageWrap isMe={user === name}>
        <MessageText>{text}</MessageText>
      </MessageWrap>
      {user === name && (
        <MessageUserWrap>
          <MessageUserImg
            src={
              "https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg"
            }
          />
          <MessageUserName>{user}</MessageUserName>
        </MessageUserWrap>
      )}
    </MessageContainer>
  );
};

export default Message;
