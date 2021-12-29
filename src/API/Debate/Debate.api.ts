import axios from "axios";
import config from "../../config/config.json";

export const getDebateData = async (): Promise<any[]> => {
  const url = `${config.SERVER}/devate/notificate`;
  try {
    const data = await axios.get(url);
    return data;
  } catch (error: any) {
    return error.response;
  }
};
