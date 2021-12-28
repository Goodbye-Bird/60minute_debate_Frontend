import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useSocket from "../../hooks/socket/useSocket";
import quertString from "query-string";

const Room: React.FC = () => {
  const { search } = useLocation();
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [serverMessages, setServerMessages] = useState<string[]>([]);

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

  useEffect(() => {
    socket.current.on("message", (messages: any) => {
      setServerMessages([...serverMessages, messages.text]);
    });
    socket.current.on("roomData", ({ users }: { users: any }) => {
      setUsers(users);
    });
  }, [serverMessages]);

  return (
    <div>
      <div>방제목 : {room}</div>
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
            return <div key={index}>{item}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Room;
