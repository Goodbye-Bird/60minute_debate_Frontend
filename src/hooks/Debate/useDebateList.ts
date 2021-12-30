import { useState } from "react";
import { useRecoilState } from "recoil";
import { getDebateData, getDebateList } from "../../API/Debate/Debate.api";
import { IDebateRes } from "../../Interface/Debate/IDebate";
import { debateRoomList } from "../../store/clickDebateAtom";
import { debateList } from "../../store/debateListAtom";

const useDebate = () => {
  const [debateDataList, setDebateListData] = useRecoilState(debateList);
  const [currentDebateList, setCurrentDebateList] =
    useRecoilState(debateRoomList);

  const handleDebateList = async (time: number) => {
    const data = await getDebateData(time);
    return data;
  };

  const loadDebateList = async () => {
    const { devates } = await getDebateList();
    setCurrentDebateList(devates);
  };

  return { handleDebateList, loadDebateList };
};

export default useDebate;
