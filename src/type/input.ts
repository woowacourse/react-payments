import { LABEL } from '../constants/inputInfo';

export type LabelOption = keyof typeof LABEL;

export interface InputInfo {
  value: string;
  type: string;
  isError: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  required?: boolean;
  disabled?: boolean;
}

export type InputsType = {
  [key: string]: InputInfo;
};

export type AllInputsType = {
  [key: string]: InputsType;
};

export interface DefaultInfo {
  type: string;
  required: boolean;
}
