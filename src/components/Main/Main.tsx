import React from "react";
import { useRecoilState } from "recoil";
import{ useTimeer} from "../../hooks/useTimeer";
import { timeData } from "../../store/timerDataAtom";
import { getDate } from "../../util/getDate";
import {
  MainContainer,
  MainTitle,
  MainTitleLine,
  MainWrap,
} from "./Main.style";
import NoticeForm from "./NoticeForm";

const Main: React.FC = () => {
  
  const [timer,setTimeer] = useRecoilState(timeData);

  // const currentTimer = () =>{
  //   const date = new Date();
  //   const hours = String(date.getHours()).padStart(2,'0');
  //   const minutes = String(date.getMinutes()).padStart(2,'0');
  //   const second = String(date.getSeconds()).padStart(2,'0');
    
  //   const time = `${hours}:${minutes}:${second}`
    
  //   setTimeer((prve)=>({...prve,time:time}))
  // }

  // const startTimer = () => {
  //   setInterval(currentTimer, 1000)
  //   // console.log
  // }

// startTimer();
  useTimeer();
  
  
  return (
    <MainContainer>
      <MainWrap>
        <MainTitle>{timer.time}</MainTitle>
        <MainTitleLine />
        <NoticeForm
          name={"정우재"}
          room={"학생회 안건"}
          time={"16:00 ~ 17:00"}
          overTime ={'05:15'}
        />
        <NoticeForm name={"임동현2"} room={"1"} time={"16:00 ~ 17:00"} overTime="4:00"/>
        <NoticeForm
          name={"sdasdssa"}
          room={"바인드 회의"}
          time={"17:00 ~ 18:00"}
          overTime="08:22"
        />
        <NoticeForm
          name={"임동현2"}
          room={"학교 재정 안건"}
          time={"18:00 ~ 19:00"}
          overTime="19:00"
        />
      </MainWrap>
    </MainContainer>
  );
};

export default Main;
