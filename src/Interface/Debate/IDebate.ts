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
