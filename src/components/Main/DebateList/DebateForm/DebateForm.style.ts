import styled, { css } from "styled-components";

interface IDebateFormContainerProps {
  isClick: boolean;
  isCheck: boolean;
}

export const DebateFormWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DebateFormContainer = styled.button<IDebateFormContainerProps>`
  width: 100%;
  height: 70px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;

  ${(props) =>
    props.isClick
      ? css`
          background-color: ${props.theme.blue_color};
          color: white;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        `
      : css`
          background-color: white;
          color: black;
        `}

  display: flex;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;

export const DebateFormTime = styled.p`
  font-size: 20px;
  margin-right: auto;
`;
export const DebateFormInputWrap = styled.div<{ isClick: boolean }>`
  width: 100%;
  min-height: 70px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;

  ${(props) =>
    props.isClick
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `};

  align-items: center;
  padding: 0px 20px;
`;

export const DebateFormInputText = styled.p`
  font-size: 20px;
`;

export const DebateFormInput = styled.input`
  width: 88%;
  margin-left: auto;
`;
