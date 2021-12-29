import useModal from "../../../hooks/Main/useModal";
import DebateForm from "./DebateForm";
import {
  DebateListContainer,
  DebateOverlay,
  DebateTitleWrap,
} from "./DebateList.style";

const DebateList: React.FC = () => {
  const { onOverlayClick } = useModal();

  return (
    <>
      <DebateOverlay onClick={onOverlayClick} />
      <DebateListContainer>
        <DebateTitleWrap></DebateTitleWrap>
        <DebateForm />
        <DebateForm />
        <DebateForm />
      </DebateListContainer>
    </>
  );
};

export default DebateList;
