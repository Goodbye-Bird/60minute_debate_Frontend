export interface IMessage {
  text: string;
  user: string;
}

export interface IMessageProps {
  message: IMessage;
  name: string | string[] | null;
}
