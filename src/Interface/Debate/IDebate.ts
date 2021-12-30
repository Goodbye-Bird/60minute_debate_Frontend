export interface IDebateFormProps {
  index: number;
  toTime: number;
}

export interface IDebateRes {
  status: number;
  message?: string;
  error?: string;
  isValid?: boolean[];
}

export interface IMakeDebate {
  name: string;
  room: string;
  time: number;
}
