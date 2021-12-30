import {
  DebateFormContainer,
  DebateFormInput,
  DebateFormInputText,
  DebateFormInputWrap,
  DebateFormTime,
  DebateFormWrap,
} from "./DebateForm.style";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  clickDebateAtom,
  currentClickDebate,
  debateText,
} from "../../../../store/clickDebateAtom";
import { IDebateFormProps } from "../../../../Interface/Debate/IDebate";
import useDebate from "../../../../hooks/Debate/useDebateList";

const DebateForm: React.FC<IDebateFormProps> = ({ index, toTime }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [clickDebates, setClickDebates] = useRecoilState(clickDebateAtom);
  const [currentClickDebateTime, setCurrentClickDebateTime] =
    useRecoilState(currentClickDebate);

  const [debateTextData, setDebateTextData] = useRecoilState(debateText);

  const { handleDebateList } = useDebate();

  const time = `${index}시 ~ ${toTime}시`;

  const onChangeClick = async () => {
    if (!isClick) {
      const { message, status, isValid } = await handleDebateList(toTime);
      if (status === 200) {
        window.alert(message);
        setIsClick((prev) => !prev);
        setClickDebates((prev) => [...prev, index]);
        return;
      }
      window.alert("사용할 수 없는 시간대입니다.");
    } else {
      setClickDebates((prev) => prev.filter((item) => item !== index));
    }
    setCurrentClickDebateTime(index);
  };

  return (
    <DebateFormWrap>
      <DebateFormContainer isClick={isClick} onClick={onChangeClick}>
        <DebateFormTime>{time}</DebateFormTime>
      </DebateFormContainer>
      <DebateFormInputWrap isClick={isClick}>
        <DebateFormInputText>방제목 : </DebateFormInputText>
        <DebateFormInput
          value={debateTextData}
          onChange={(event) => setDebateTextData(event?.target.value)}
        />
      </DebateFormInputWrap>
    </DebateFormWrap>
  );
};

export default DebateForm;
