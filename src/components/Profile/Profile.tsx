import { profile } from "console";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userInfo } from "../../store/userDataAtom";
import profileImg from "../assets/img/user.png";
import logout from "../assets/img/logout.png";
import { ProfileContainer, NameTitle } from "./Profile.style";
import useHandleUserData from "../../hooks/Profile/useHandleUserData";

const Profile = () => {
  const [userData, setUserData] = useRecoilState(userInfo);

  const { handleUserData } = useHandleUserData();

  useEffect(() => {
    handleUserData();
  }, []);

  const logoutBtn = () => {
    localStorage.removeItem("access-token");
    window.location.reload();
  };

  return (
    <ProfileContainer>
      <img src={profileImg} width={"50px"} alt="" />
      <NameTitle>{userData.name}</NameTitle>
      {/* <img src={logout} style={{width:"50px",marginLeft:"200px",cursor:"pointer"}} onClick={logoutBtn}/> */}
    </ProfileContainer>
  );
};

export default Profile;
