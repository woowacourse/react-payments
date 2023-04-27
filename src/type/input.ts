import { LABEL } from "../constants/inputInfo";

export type LabelOption = keyof typeof LABEL;

export interface CardNumber {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface CardNumberIndex {
  [key: string]: string;
}

export interface TextLength {
  [key: string]: number;
}

export interface ErrorMessage {
  [key: string]: string;
}

export interface Password {
  firstPassword: string;
  secondPassword: string;
}

export interface Date {
  month: string;
  year: string;
}
