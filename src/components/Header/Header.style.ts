import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.main_color};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const HeaderWrap = styled.div`
  padding: 60px 0px;
  width: 60%;
  height: 100%;
`;
