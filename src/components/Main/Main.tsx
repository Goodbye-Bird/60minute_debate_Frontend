import React, { useState } from "react";
import { MainContainer, MainWrap } from "./Main.style";
import { Link } from "react-router-dom";
import NoticeForm from "./NoticeForm";

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainWrap>
        <NoticeForm
          name={"임동현2"}
          room={"학생회 안건"}
          time={"16:00 ~ 17:00"}
        />
        <NoticeForm name={"정우재2"} room={"1"} time={"16:00 ~ 17:00"} />
        <NoticeForm
          name={"sdasdssa"}
          room={"바인드 회의"}
          time={"17:00 ~ 18:00"}
        />
        <NoticeForm
          name={"임동현"}
          room={"학교 재정 안건"}
          time={"18:00 ~ 19:00"}
        />
      </MainWrap>
    </MainContainer>
  );
};

export default Main;
