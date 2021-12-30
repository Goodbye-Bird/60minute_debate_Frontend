import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 60px 0px;
`;

export const MainTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-size: 30px;
`;

export const MainOnListModal = styled.button`
  height: 100%;
  margin-left: auto;
  box-sizing: border-box;
  border: 0px;
  background: none;
  color: green;
  font-size: 30px;
`;

export const MainTitleLine = styled.hr`
  width: 100%;
  border: 1px solid #dbdbdb;
`;
