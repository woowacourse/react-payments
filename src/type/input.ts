import { LABEL } from '../constants/inputInfo';

export type LabelOption = keyof typeof LABEL;

export interface InputInfo {
  value: any;
  type: string;
  error: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  required?: boolean;
  regexp: RegExp;
}

export interface DefaultInfo {
  type: string;
  required: boolean;
}
