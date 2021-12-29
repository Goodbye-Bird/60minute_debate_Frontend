import { Link } from "react-router-dom";
import { INoticeFormProps } from "../../../Interface/NoticeForm/INoticeForm";
import { NoticeContainer, NoticeTime, NoticeTitle } from "./NoticeForm.style";

const NoticeForm: React.FC<INoticeFormProps> = ({ name, room, time }) => {
  return (
    <>
      <NoticeContainer>
        <Link to={`/room?name=${name}&room=${room}`}>
          <NoticeTitle>{room}</NoticeTitle>
          <NoticeTime>{time}</NoticeTime>
        </Link>
      </NoticeContainer>
    </>
  );
};

export default NoticeForm;
