import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sendMakeDebateData } from "../../API/Debate/Debate.api";
import { clickDebateAtom, debateText } from "../../store/clickDebateAtom";
import { userInfo } from "../../store/userDataAtom";

const useHandleDebate = () => {
  const [debateTextData, setDebateTextData] = useRecoilState(debateText);
  const [clickDebates, setClickDebates] = useRecoilState(clickDebateAtom);
  const [userData, setUserData] = useRecoilState(userInfo);
  const history = useHistory();

  const onMakeRoom = async (currentClickDebate: number) => {
    const { status } = await sendMakeDebateData(
      userData.name,
      currentClickDebate + 1,
      debateTextData
    );

    if (status === 200) {
      history.push("/main");
      setDebateTextData("");
      setClickDebates([]);
    }
  };

  return { onMakeRoom };
};

export default useHandleDebate;
