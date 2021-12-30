import axios from "axios";
import config from "../../config/config.json";

export const getDebateData = async () => {
  const url = `${config.SERVER}/debate/timeCheck`;
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error: any) {
    return error.response;
  }
};

export const sendMakeDebateData = async (
  name: string,
  time: number,
  room: string
) => {
  const url = `${config.SERVER}/debate/postdebate`;
  try {
    const { data } = await axios.post(url, { name, time, room });
    return data;
  } catch (error: any) {
    return error.resposne;
  }
};
