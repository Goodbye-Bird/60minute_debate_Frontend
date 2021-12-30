export interface IDebateFormProps {
  index: number;
  toTime: number;
  isCheck: boolean;
}

export interface IDebateRes {
  status: number;
  message?: string;
  error?: string;
  times?: boolean[];
}

export interface IMakeDebate {
  name: string;
  room: string;
  time: number;
}
