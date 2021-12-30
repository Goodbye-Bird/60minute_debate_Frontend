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
  font-size: 20px;
  margin-right: auto;
`;

export const RoomExitButton = styled.button`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 0px;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

export const RoomExitButtonImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

export const RoomChatWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 30px;
  box-sizing: border-box;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RoomInputWrap = styled.form`
  width: 95%;
  min-height: 50px;
  display: flex;
  margin: auto;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid #dbdbdb;
`;

export const RoomInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 0px;
  outline: none;

  &:disabled {
    background-color: #ccc;
  }
`;

export const RoomSendBtn = styled.button`
  min-width: 80px;
  height: 100%;
  box-sizing: border-box;
  border: 0px;
`;
