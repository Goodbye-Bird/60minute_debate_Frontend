import React, { useState } from "react";
import { MainContainer, MainWrap } from "./Main.style";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  return (
    <MainContainer>
      <MainWrap>채팅 입장</MainWrap>
      <Link to={`/room?name=${name}&room=${room}`}>
        <button></button>
      </Link>
      <input
        placeholder="room"
        onChange={(e) => setRoom(e.target.value)}
        value={room}
      />
      <input
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </MainContainer>
  );
};

export default Main;
