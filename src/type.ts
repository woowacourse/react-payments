import { CARD_CO_NAME } from "./CONSTANT";

export interface CreditCard {
  cardCo: CardCo;
  nickName: string;
  cardNumber: string[];
  expirationDate: string;
  owner: string;
  securityCode: string;
  password: string[];
}

export type nowStatus = 0 | 1 | 2;

export interface InputStatus {
  cardCo: boolean;
  cardNumber: boolean;
  expirationDate: boolean;
  owner: boolean;
  securityCode: boolean;
  password: boolean;
}

export type CardCo = keyof typeof CARD_CO_NAME;
