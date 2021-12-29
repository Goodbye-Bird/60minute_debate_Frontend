import styled from "styled-components";

export const DebateOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const DebateListContainer = styled.div`
  width: 840px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  row-gap: 5px;
  border-radius: 5px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DebateTitleWrap = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
`;

export const DebateTitle = styled.h1``;
