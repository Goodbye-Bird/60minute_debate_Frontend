import { useEffect } from "react";
import { useRecoilState } from "recoil";
import useDebate from "../../../hooks/Debate/useDebateList";
import useModal from "../../../hooks/Main/useModal";
import { clickDebateAtom } from "../../../store/clickDebateAtom";
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

  const [clickDebates, setClickDebates] = useRecoilState(clickDebateAtom);
  const [debateDataList, setDebateListData] = useRecoilState(debateList);

  useEffect(() => {
    setDebateListData(handleDebateList());
  }, []);

  return (
    <>
      <DebateOverlay onClick={onOverlayClick} />
      <DebateListContainer>
        <DebateTitleWrap>
          <DebateTitle>토론 목록</DebateTitle>
          {clickDebates.length === 1 && <DebateSubmitBtn>추가</DebateSubmitBtn>}
        </DebateTitleWrap>
        <DebateForm index={0} />
        <DebateForm index={1} />
        <DebateForm index={2} />
        <DebateForm index={3} />
        <DebateForm index={4} />
        <DebateForm index={5} />
        <DebateForm index={6} />
      </DebateListContainer>
    </>
  );
};

export default DebateList;
