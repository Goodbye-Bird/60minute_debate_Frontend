import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useDebate from "../../../hooks/Debate/useDebateList";
import useHandleDebate from "../../../hooks/Debate/useHandleDebate";
import useModal from "../../../hooks/Main/useModal";
import { IDebateRes } from "../../../Interface/Debate/IDebate";
import {
  clickDebateAtom,
  currentClickDebate,
  debateText,
} from "../../../store/clickDebateAtom";
import { debateList } from "../../../store/debateListAtom";
import DebateForm from "./DebateForm";
import {
  DebateListContainer,
  DebateOverlay,
  DebateSubmitBtn,
  DebateTitle,
  DebateTitleWrap,
} from "./DebateList.style";

const DebateList: React.FC = () => {
  const { onOverlayClick } = useModal();
  const { handleDebateList } = useDebate();
  const { onMakeRoom } = useHandleDebate();

  const [clickDebates, setClickDebates] = useRecoilState(clickDebateAtom);
  const [debateDataList, setDebateListData] = useRecoilState(debateList);
  const [isLoading, setIsLoading] = useState(true);
  const [currentClickDebateTime, setCurrentClickDebateTime] =
    useRecoilState(currentClickDebate);
  const [debateTextData, setDebateTextData] = useRecoilState(debateText);

  useEffect(() => {
    handleDebateList();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (clickDebates.length >= 2) {
      window.alert("토론시간은 한시간만 선택 가능합니다.");
      window.location.reload();
    }
  }, [clickDebates]);

  return (
    <>
      <DebateOverlay onClick={onOverlayClick} />
      <DebateListContainer>
        <DebateTitleWrap>
          <DebateTitle>토론 목록</DebateTitle>
          {clickDebates.length === 1 && (
            <DebateSubmitBtn onClick={() => onMakeRoom(currentClickDebateTime)}>
              추가
            </DebateSubmitBtn>
          )}
        </DebateTitleWrap>

        <>
          {isLoading ? (
            "loading..."
          ) : (
            <>
              {debateDataList?.map((item, index) => {
                return (
                  <DebateForm
                    index={index}
                    toTime={index + 1}
                    key={index}
                    isCheck={item}
                  />
                );
              })}
            </>
          )}
        </>
      </DebateListContainer>
    </>
  );
};

export default DebateList;
