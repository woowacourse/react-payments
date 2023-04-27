import { Dispatch, SetStateAction } from "react";

export interface ExpirationDate {
  month: string;
  year: string;
}

export interface CardNumber {
  [key: string]: string;
  number1: string;
  number2: string;
  number3: string;
  number4: string;
}

export interface PreviewCardInfo extends ExpirationDate, CardNumber {
  cardCompany: string;
  name: string;
}

export type SetModalState = Dispatch<SetStateAction<boolean>>;

export type SetCardCompany = Dispatch<SetStateAction<string>>;
