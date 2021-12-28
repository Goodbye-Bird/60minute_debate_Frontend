import React, { useEffect } from "react";
import io from "socket.io-client";

import config from "../config/config.json";
import Room from "../components/Room/Room";

const RoomPage: React.FC = () => {
  return (
    <React.Fragment>
      <Room />
    </React.Fragment>
  );
};

export default RoomPage;
