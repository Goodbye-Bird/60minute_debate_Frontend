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
import {
  clickDebateAtom,
  currentClickDebate,
  debateName,
  debateText,
} from "../../../../store/clickDebateAtom";
import { IDebateFormProps } from "../../../../Interface/Debate/IDebate";

const DebateForm: React.FC<IDebateFormProps> = ({ index, toTime, isCheck }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [clickDebates, setClickDebates] = useRecoilState(clickDebateAtom);
  const [currentClickDebateTime, setCurrentClickDebateTime] =
    useRecoilState(currentClickDebate);

  const [debateTextData, setDebateTextData] = useRecoilState(debateText);
  const [debateNameData, setDebateNameData] = useRecoilState(debateName);

  const time = `${index}시 ~ ${toTime}시`;

  const onChangeClick = () => {
    if (!isClick) {
      setClickDebates((prev) => [...prev, index]);
    } else {
      setClickDebates((prev) => prev.filter((item) => item !== index));
    }
    setIsClick((prev) => !prev);
    setCurrentClickDebateTime(index);
  };

  return (
    <DebateFormWrap>
      <DebateFormContainer
        isClick={isClick}
        onClick={onChangeClick}
        isCheck={isCheck}
      >
        <DebateFormTime>{time}</DebateFormTime>
      </DebateFormContainer>
      <DebateFormInputWrap isClick={isClick}>
        <div>
          <DebateFormInputText>방제목 : </DebateFormInputText>
          <DebateFormInput
            value={debateTextData}
            onChange={(event) => setDebateTextData(event?.target.value)}
          />
        </div>
        <div>
          <DebateFormInputText>이름 : </DebateFormInputText>
          <DebateFormInput
            value={debateNameData}
            onChange={(event) => setDebateNameData(event?.target.value)}
          />
        </div>
      </DebateFormInputWrap>
    </DebateFormWrap>
  );
};

export default DebateForm;
