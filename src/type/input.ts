import { LABEL } from '../constants/inputInfo';

export type LabelOption = keyof typeof LABEL;

export interface InputInfo {
  value: any;
  type: string;
  error: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  regexp: RegExp;
}
