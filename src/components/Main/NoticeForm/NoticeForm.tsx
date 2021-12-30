import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { INoticeFormProps } from "../../../Interface/NoticeForm/INoticeForm";
import { timeData } from "../../../store/timerDataAtom";
import { NoticeContainer, NoticeTime, NoticeTitle } from "./NoticeForm.style";
import { useTimeer } from "../../../hooks/useTimeer";

const NoticeForm: React.FC<INoticeFormProps> = ({ name, room, time, overTime }) => {
  return (
    <>
      <NoticeContainer>
        <Link to={`/room?name=${name}&room=${room}&overTime=${overTime}`}>
          <NoticeTitle>{room}</NoticeTitle>
          <NoticeTime>{time}</NoticeTime>
        </Link>
      </NoticeContainer>
    </>
  );
};

export default NoticeForm;
