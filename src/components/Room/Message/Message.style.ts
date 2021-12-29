import styled, { css } from "styled-components";

export const MessageContainer = styled.div<{ isMe: boolean }>`
  width: auto;
  height: auto;
  margin-left: auto;
  ${(props) =>
    props.isMe
      ? css`
          background-color: black;
        `
      : css`
          background-color: ${props.theme.main_color};
        `};
`;
