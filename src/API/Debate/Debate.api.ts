import axios from "axios";
import config from "../../config/config.json";
import { IDebateRes } from "../../Interface/Debate/IDebate";

export const getDebateData = async () => {
  const url = `${config.SERVER}/debate/timeCheck`;
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error: any) {
    return error.response;
  }
};
