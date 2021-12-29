import { HeaderContainer, HeaderImg, HeaderWrap } from "./Header.style";
import Logo from "../assets/img/logo.png";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderImg src={Logo} />
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
