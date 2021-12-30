import styled from "styled-components";

export const NoticeContainer = styled.button`
  width: 100%;
  height: 70px;
  border: 2px solid ${(props) => props.theme.blue_color};
  background-color: white;
  border: 1px solid #dbdbdb;
  margin: 0px auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  padding: 0px;
  border-radius: 5px;
  overflow: hidden;

  a {
    text-decoration: none;
    color: black;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    align-items: center;
  }
`;

export const NoticeTitle = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;

export const NoticeTime = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;
