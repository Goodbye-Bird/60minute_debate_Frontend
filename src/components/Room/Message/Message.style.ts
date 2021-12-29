import styled, { css } from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
`;

export const MessageWrap = styled.div<{ isMe: boolean }>`
  max-width: 400px;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;

  ${(props) =>
    props.isMe
      ? css`
          background-color: white;
          border: 1px solid #dbdbdb;
          margin-left: auto;
          margin-right: 20px;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        `
      : css`
          background-color: ${props.theme.main_color};
          margin-right: auto;
          margin-left: 20px;
          border-bottom-right-radius: 20px;
          border-top-right-radius: 20px;
          border-bottom-left-radius: 20px;
        `};
`;

export const MessageUserWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageUserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  border: 1px solid #dbdbdb;
  object-fit: cover;
  margin: 0px auto;
`;

export const MessageUserName = styled.h1`
  text-align: center;
`;

export const MessageText = styled.p`
  font-size: 15px;
`;
