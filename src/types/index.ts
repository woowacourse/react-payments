import { Dispatch, SetStateAction } from "react";

export interface CardNumber {
  [key: string]: string;
  number1: string;
  number2: string;
  number3: string;
  number4: string;
}

export interface ExpirationDate {
  month: string;
  year: string;
}

export interface PreviewCardInfo extends ExpirationDate, CardNumber {
  cardCompany: string;
  name: string;
}

export interface Password {
  [key: string]: string;
  password1: string;
  password2: string;
}

export interface CardInfo extends PreviewCardInfo, Password {
  code: string;
}

export interface CardInfoState {
  cardInfo: CardInfo;
  setCardInfo: SetCardInfo;
}

export type SetModalState = Dispatch<SetStateAction<boolean>>;

type SetCardInfo = Dispatch<SetStateAction<CardInfo>>;
