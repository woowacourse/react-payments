import { LABEL } from '../constants/inputInfo';

export type LabelOption = keyof typeof LABEL;

export interface InputInfo {
  value: string;
  type: string;
  isError: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  required?: boolean;
}

export interface DefaultInfo {
  type: string;
  required: boolean;
}
