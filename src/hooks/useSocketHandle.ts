import { useHistory } from "react-router-dom";

const useSocketHandle = () => {
  const history = useHistory();

  const onExit = () => {
    history.push("/main");
    window.location.reload();
  };

  return { onExit };
};

export default useSocketHandle;
