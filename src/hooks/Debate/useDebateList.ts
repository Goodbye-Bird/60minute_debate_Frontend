import { getDebateData } from "../../API/Debate/Debate.api";

const useDebate = () => {
  const handleDebateList = async () => {
    const data = await getDebateData();
    return data;
  };

  return { handleDebateList };
};

export default useDebate;
