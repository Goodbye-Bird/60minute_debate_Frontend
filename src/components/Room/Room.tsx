import React, {
  FormEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import useSocket from "../../hooks/socket/useSocket";
import quertString from "query-string";
import {
  RoomChatWrap,
  RoomContaienr,
  RoomExitButton,
  RoomExitButtonImg,
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
import { useRecoilState } from "recoil";
import { MessageData } from "../../store/messageDataAtom";
import { useTimeer } from "../../hooks/useTimeer";
import { timeData } from "../../store/timerDataAtom";
import swal from "sweetalert";

const Room: React.FC = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [serverMessages, setServerMessages] = useRecoilState(MessageData);
  const [timer, setTimeer] = useRecoilState(timeData);

  const { name, room, overTime } = quertString.parse(search);
  const socket = useSocket();
  const { onExit } = useSocketHandle();

  const rommOnexit = () => {
    if (timer.time == overTime) {
      console.log("boom");
      swal(
        "회의가 종료되었습니다.",
        "버튼을 눌러 퇴장해주세요.",
        "success"
      ).then(() => {
        onExit();
      });
    }
  };

  useTimeer();

  useEffect(() => {
    rommOnexit();
    socket.current.emit("join", { name, room }, (error: any) => {
      if (error) {
        history.push("/main");
      }
    });
  }, [timer.time]);

  const sendMessage = useCallback(
    (event: MouseEvent | FormEvent<HTMLFormElement>) => {
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
          <RoomExitButton onClick={onExit}>
            <RoomExitButtonImg
              src={
                "https://cdn-icons.flaticon.com/png/512/2961/premium/2961937.png?token=exp=1640770804~hmac=fdea0fc6a9f87dedb1875ba7aaf94b2f"
              }
            />
          </RoomExitButton>
        </RoomTitleWrap>
        <RoomChatWrap>
          {serverMessages && (
            <>
              {serverMessages.map((item, index) => {
                return <Message key={index} message={item} name={name} />;
              })}
            </>
          )}
        </RoomChatWrap>
        <RoomInputWrap
          onSubmit={(e) => sendMessage(e as FormEvent<HTMLFormElement>)}
        >
          <RoomInput
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
          <RoomSendBtn onClick={(e) => sendMessage(e as MouseEvent)}>
            전송
          </RoomSendBtn>
        </RoomInputWrap>
      </RoomWrap>
    </RoomContaienr>
  );
};

export default Room;
