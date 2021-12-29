import React from "react";
import { useRouteMatch } from "react-router-dom";
import useModal from "../../hooks/Main/useModal";
import { getDate } from "../../util/getDate";
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

const Main: React.FC = () => {
  const debateListMatch = useRouteMatch("/main/debatelist");

  const { onBoxClick } = useModal();

  return (
    <MainContainer>
      <MainWrap>
        <MainTitleWrap>
          <MainTitle>{getDate()}</MainTitle>
          <MainOnListModal onClick={onBoxClick}>토론 추가+</MainOnListModal>
        </MainTitleWrap>
        <MainTitleLine />
        <NoticeForm
          name={"임동현"}
          room={"학생회 안건"}
          time={"16:00 ~ 17:00"}
        />
        <NoticeForm name={"임동현2"} room={"1"} time={"16:00 ~ 17:00"} />
        <NoticeForm
          name={"sdasdssa"}
          room={"바인드 회의"}
          time={"17:00 ~ 18:00"}
        />
        <NoticeForm
          name={"임동현2"}
          room={"학교 재정 안건"}
          time={"18:00 ~ 19:00"}
        />
      </MainWrap>
      {debateListMatch && <DebateList />}
    </MainContainer>
  );
};

export default Main;
