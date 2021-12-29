import { useEffect, useRef } from "react";
import io from "socket.io-client";
import config from "../../config/config.json";

const useSocket = () => {
  const socketRef: any = useRef<any>();

  useEffect(() => {
    socketRef.current = io.connect(`${config.SERVER}`, {
      transports: ["websocket"],
    });
  }, []);

  return socketRef;
};

export default useSocket;
