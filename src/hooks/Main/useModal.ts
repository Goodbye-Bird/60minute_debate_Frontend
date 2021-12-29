import { useHistory } from "react-router-dom";

const useModal = () => {
  const history = useHistory();

  const onBoxClick = () => {
    history.push("/main/debatelist");
  };

  const onOverlayClick = () => {
    history.push("/main");
  };

  return { onBoxClick, onOverlayClick };
};

export default useModal;
