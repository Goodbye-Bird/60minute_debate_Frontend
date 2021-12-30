import { useState } from "react";
import { useRecoilState } from "recoil";
import { getDebateData } from "../../API/Debate/Debate.api";
import { IDebateRes } from "../../Interface/Debate/IDebate";
import { debateList } from "../../store/debateListAtom";

const useDebate = () => {
  const [debateDataList, setDebateListData] = useRecoilState(debateList);

  const handleDebateList = async () => {
    const { times, status }: IDebateRes = await getDebateData();
    if (status === 200) {
      setDebateListData(times);
    }
  };

  return { handleDebateList };
};

export default useDebate;
