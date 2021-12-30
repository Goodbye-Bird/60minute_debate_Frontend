import axios from "axios";
import Token from "../../lib/Token";
import config from "../../config/config.json";

export const getUserData = async () => {
  const token = Token.getToken();
  try {
    const { data } = await axios.get(`${config.SERVER}/main`, {
      headers: { token: token },
    });
    return data;
  } catch (error) {
    return error;
  }
};
