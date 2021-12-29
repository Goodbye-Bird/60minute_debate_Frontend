import { useRecoilState } from "recoil";
import { debateText } from "../../store/clickDebateAtom";

const useHandleDebate = () => {
  const [debateTextData, setDebateTextData] = useRecoilState(debateText);

  const onMakeRoom = (currentClickDebate: number) => {
    console.log(debateTextData);
    console.log(currentClickDebate + 1);
  };

  return { onMakeRoom };
};

export default useHandleDebate;
