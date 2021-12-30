import { HeaderContainer, HeaderImg, HeaderWrap } from "./Header.style";
import Logo from "../assets/img/logo.png";
import Profile from "../Profile";
import Token from "../../lib/Token";

const Header: React.FC = () => {
  const token = Token.getToken();
  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderImg src={Logo} />
      </HeaderWrap>
      {token ? <Profile></Profile> : null}
    </HeaderContainer>
  );
};

export default Header;
