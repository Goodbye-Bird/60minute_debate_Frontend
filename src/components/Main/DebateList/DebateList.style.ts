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
  max-height: 770px;
  padding: 20px;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  border: 1px solid #dbdbdb;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  row-gap: 8px;
  border-radius: 5px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DebateTitleWrap = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  position: sticky;
  background: white;
  top: 0px;
  z-index: 1;
`;

export const DebateTitle = styled.h1`
  font-size: 30px;
`;

export const DebateSubmitBtn = styled.button`
  height: 100%;
  margin-left: auto;
  background: none;
  border: 0px;
  font-size: 30px;
  color: green;
`;
