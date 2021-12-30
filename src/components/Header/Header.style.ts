import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  margin-bottom: 10px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const HeaderWrap = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

export const HeaderImg = styled.img`
  width: 148px;
  height: 95%;
  object-fit: scale-down;
`;
