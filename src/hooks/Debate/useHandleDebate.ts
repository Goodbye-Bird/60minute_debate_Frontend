import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sendMakeDebateData } from "../../API/Debate/Debate.api";
import {
  clickDebateAtom,
  debateName,
  debateText,
} from "../../store/clickDebateAtom";

const useHandleDebate = () => {
  const [debateTextData, setDebateTextData] = useRecoilState(debateText);
  const [debateNameData, setDebateNameData] = useRecoilState(debateName);
  const [clickDebates, setClickDebates] = useRecoilState(clickDebateAtom);
  const history = useHistory();

  const onMakeRoom = async (currentClickDebate: number) => {
    const { status } = await sendMakeDebateData(
      debateNameData,
      currentClickDebate + 1,
      debateTextData
    );

    if (status === 200) {
      history.push("/main");
      setDebateTextData("");
      setDebateNameData("");
      setClickDebates([]);
    }
  };

  return { onMakeRoom };
};

export default useHandleDebate;
