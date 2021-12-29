import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useSocket from "../../hooks/socket/useSocket";
import quertString from "query-string";
import {
  RoomChatWrap,
  RoomContaienr,
  RoomInput,
  RoomInputWrap,
  RoomSendBtn,
  RoomTitle,
  RoomTitleWrap,
  RoomWrap,
} from "./Room.style";
import Message from "./Message/Message";
import { IMessage } from "../../Interface/Message/IMessage";
import useSocketHandle from "../../hooks/useSocketHandle";

const Room: React.FC = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [serverMessages, setServerMessages] = useState<IMessage[]>([]);

  const { name, room } = quertString.parse(search);
  const socket = useSocket();
  const { onExit } = useSocketHandle();

  useEffect(() => {
    console.log(name, room);
    socket.current.emit("join", { name, room }, (error: any) => {
      if (error) {
        history.push("/main");
      }
    });
  }, []);

  const sendMessage = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      if (message) {
        socket.current.emit("sendMessage", message, setMessage(""));
      }
    },
    [message]
  );

  useEffect(() => {
    socket.current.on("message", (messages: IMessage) => {
      setServerMessages([...serverMessages, messages]);
    });
    socket.current.on("roomData", ({ users }: { users: any }) => {
      setUsers(users);
    });
  }, [serverMessages]);

  return (
    <RoomContaienr>
      <RoomWrap>
        <RoomTitleWrap>
          <RoomTitle>방제목 : {room}</RoomTitle>
          <button onClick={onExit}>나가기</button>
        </RoomTitleWrap>
        <RoomChatWrap>
          {serverMessages && (
            <div>
              {serverMessages.map((item, index) => {
                return <Message key={index} message={item} name={name} />;
              })}
            </div>
          )}
        </RoomChatWrap>
        <RoomInputWrap>
          <RoomInput
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
          <RoomSendBtn onClick={(e) => sendMessage(e as MouseEvent)} />
        </RoomInputWrap>
      </RoomWrap>
    </RoomContaienr>
  );
};

export default Room;
