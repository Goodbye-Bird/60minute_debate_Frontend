import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import useModal from "../../hooks/Main/useModal";
import { useRecoilState } from "recoil";
import { useTimeer } from "../../hooks/useTimeer";
import { timeData } from "../../store/timerDataAtom";
import DebateList from "./DebateList";
import {
  MainContainer,
  MainOnListModal,
  MainTitle,
  MainTitleLine,
  MainTitleWrap,
  MainWrap,
} from "./Main.style";
import NoticeForm from "./NoticeForm";
import useDebate from "../../hooks/Debate/useDebateList";
import { debateRoomList } from "../../store/clickDebateAtom";
import { Item } from "framer-motion/types/components/Reorder/Item";
import { userInfo } from "../../store/userDataAtom";

const Main: React.FC = () => {
  const debateListMatch = useRouteMatch("/main/debatelist");
  const [currentDebateList, setCurrentDebateList] =
    useRecoilState(debateRoomList);

  const [userData, setUserData] = useRecoilState(userInfo);

  const { onBoxClick } = useModal();

  const { loadDebateList } = useDebate();

  useTimeer();

  const [timer, setTimeer] = useRecoilState(timeData);

  useEffect(() => {
    console.log(currentDebateList);
  }, [currentDebateList]);

  useEffect(() => {
    loadDebateList();
  }, []);

  return (
    <MainContainer>
      <MainWrap>
        <MainTitleWrap>
          <MainTitle>{timer.time}</MainTitle>
          <MainOnListModal onClick={onBoxClick}>토론 추가+</MainOnListModal>
        </MainTitleWrap>
        <MainTitleLine />
        {currentDebateList.map((item) => (
          <NoticeForm
            name={userData.name}
            room={item.room}
            time={`${item.time - 1}시 ~ ${item.time}시`}
            overTime={String(item.time).padStart(2, "0") + ":00"}
          />
        ))}
      </MainWrap>
      {debateListMatch && <DebateList />}
    </MainContainer>
  );
};

export default Main;
