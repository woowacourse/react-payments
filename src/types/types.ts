import type { Dispatch, SetStateAction } from "react";

export type CardNumber = string[];
export type ExpireDate = {
  month: string;
  year: string;
};

export type SetCardNumber = Dispatch<SetStateAction<CardNumber>>;
export type SetExpireDate = Dispatch<SetStateAction<ExpireDate>>;
export type SetCvcNumber = Dispatch<SetStateAction<string>>;

export interface CardNumberState {
  cardNumber: CardNumber;
  setCardNumber: SetCardNumber;
}

export interface ExpireDateState {
  expireDate: ExpireDate;
  setExpireDate: SetExpireDate;
}

export interface CardPreviewProps {
  cardNumber: CardNumber;
  expireDate: ExpireDate;
}

export interface CardFormType {
  cardNumber: CardNumber;
  setCardNumber: SetCardNumber;
  expireDate: ExpireDate;
  setExpireDate: SetExpireDate;
  // cvcNumber: CvcNumber;
  // setCvcNumber: SetCvcNumber;
}
