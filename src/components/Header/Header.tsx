import { HeaderContainer, HeaderWrap } from "./Header.style";
import Profile from "../Profile"
import Token from "../../lib/Token";

const Header: React.FC = () => {
  const token  = Token.getToken()
  return (
    <HeaderContainer>
      <HeaderWrap>sadasda</HeaderWrap>  

      {
        token ?
        <Profile></Profile>: null
      }
    </HeaderContainer>
  );
};

export default Header;
