import { useRecoilState } from "recoil";
import { getUserData } from "../../API/Main/getData";
import { userInfo } from "../../store/userDataAtom";

const useHandleUserData = () => {
  const [userData, setUserData] = useRecoilState(userInfo);

  const handleUserData = async () => {
    const { user } = await getUserData();
    const { name, email, password } = user;
    console.log(user);
    setUserData((prev) => ({
      ...prev,
      name: name,
      email: email,
      password: password,
    }));
  };

  return { handleUserData };
};

export default useHandleUserData;
