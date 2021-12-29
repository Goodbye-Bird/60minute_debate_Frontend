import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useSocket from "../../hooks/socket/useSocket";
import quertString from "query-string";
import { RoomContaienr, RoomTitle, RoomWrap } from "./Room.style";
import Message from "./Message/Message";
import { IMessage } from "../../Interface/Message/IMessage";

const Room: React.FC = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [serverMessages, setServerMessages] = useState<IMessage[]>([]);

  const { name, room } = quertString.parse(search);

  const socket = useSocket();

  useEffect(() => {
    console.log(name, room);
    socket.current.emit("join", { name, room }, (error: any) => {
      if (error) {
        window.alert(error);
      }
    });
  }, []);

  const sendMessage = useCallback(
    (event: MouseEvent) => {
      console.log("DSada");
      event.preventDefault();
      if (message) {
        socket.current.emit("sendMessage", message, setMessage(""));
      }
    },
    [message]
  );

  const onExit = () => {
    history.push("/main");
  };

  useEffect(() => {
    socket.current.on("message", (messages: IMessage) => {
      console.log(messages);
      setServerMessages([...serverMessages, messages]);
    });
    socket.current.on("roomData", ({ users }: { users: any }) => {
      setUsers(users);
    });
  }, [serverMessages]);

  return (
    <RoomContaienr>
      <RoomWrap>
        <RoomTitle>방제목 : {room}</RoomTitle>
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button onClick={(e) => sendMessage(e as MouseEvent)} />
        {serverMessages && (
          <div>
            채팅 기록
            {serverMessages.map((item, index) => {
              return <Message key={index} message={item} name={name} />;
            })}
          </div>
        )}
      </RoomWrap>
    </RoomContaienr>
  );
};

export default Room;
