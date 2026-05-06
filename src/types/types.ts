import type { Dispatch, SetStateAction } from "react";

export type CardNumber = string[];
export type ExpireDate = {
  month: string;
  year: string;
};
type CvcNumber = string[];

export type SetCardNumber = Dispatch<SetStateAction<string[]>>;
export type SetExpireDate = Dispatch<SetStateAction<ExpireDate>>;
type SetCvcNumber = Dispatch<SetStateAction<string[]>>;

export interface CardPreviewProps {
  cardNumber: CardNumber;
  expireDate: ExpireDate;
}

export interface CardFormType {
  cardNumber: CardNumber;
  setCardNumber: SetCardNumber;
  expireDate: ExpireDate;
  setExpireDate: SetExpireDate;
  cvcNumber: CvcNumber;
  setCvcNumber: SetCvcNumber;
}
