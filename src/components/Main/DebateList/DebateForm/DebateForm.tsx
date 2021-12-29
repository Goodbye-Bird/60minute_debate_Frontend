import {
  DebateFormContainer,
  DebateFormInput,
  DebateFormInputText,
  DebateFormInputWrap,
  DebateFormTime,
  DebateFormWrap,
} from "./DebateForm.style";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { clickDebateAtom } from "../../../../store/clickDebateAtom";
import { IDebateFormProps } from "../../../../Interface/Debate/IDebate";

const DebateForm: React.FC<IDebateFormProps> = ({ index }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [clickDebates, setClickDebates] = useRecoilState(clickDebateAtom);

  const onChangeClick = () => {
    if (!isClick) {
      setClickDebates((prev) => [...prev, index]);
    } else {
      setClickDebates((prev) => prev.filter((item) => item !== index));
    }
    setIsClick((prev) => !prev);
  };

  return (
    <DebateFormWrap>
      <DebateFormContainer isClick={isClick} onClick={onChangeClick}>
        <DebateFormTime>12시~13시</DebateFormTime>
      </DebateFormContainer>
      <DebateFormInputWrap isClick={isClick}>
        <DebateFormInputText>방제목 : </DebateFormInputText>
        <DebateFormInput />
      </DebateFormInputWrap>
    </DebateFormWrap>
  );
};

export default DebateForm;
