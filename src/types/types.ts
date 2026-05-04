import type { Dispatch, SetStateAction } from "react";

export interface CardPreviewProps {
  cardNumber: CardNumber["cardArray"];
  expireDate: CardNumber["cardArray"];
}

export interface CardFormType {
  cardNumber: CardNumber["cardArray"];
  setCardNumber: Dispatch<SetStateAction<string[]>>;
  expireDate: CardNumber["cardArray"];
  setExpireDate: Dispatch<SetStateAction<string[]>>;
  cvcNumber: CardNumber["cardArray"];
  setCvcNumber: Dispatch<SetStateAction<string[]>>;
}

export interface CardNumber {
  cardArray: string[];
}
