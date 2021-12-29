import styled from "styled-components";

export const RoomContaienr = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const RoomWrap = styled.div`
  width: 60%;
  height: 740px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const RoomTitleWrap = styled.div`
  width: 100%;
  min-height: 80px;
  align-items: center;
  display: flex;
  padding: 0px 30px;
  border: 1px solid #dbdbdb;
`;

export const RoomTitle = styled.h1`
  font-size: 22px;
  margin-right: auto;
`;

export const RoomChatWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const RoomInputWrap = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  margin-top: auto;
`;

export const RoomInput = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

export const RoomSendBtn = styled.button`
  min-width: 40px;
  height: 100%;
  box-sizing: border-box;
`;
