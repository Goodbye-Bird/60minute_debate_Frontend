import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.main_color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrap = styled.div`
  width: 60%;
  height: 100%;
`;
