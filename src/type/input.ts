import { LABEL } from "../constants/inputInfo";

export type LabelOption = keyof typeof LABEL;

export interface CardNumber {
  first: string;
  second: string;
  third: string;
  fourth: string;
}
