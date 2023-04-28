import { COMPANY_LIST, DEFAULT_COMPANY } from "../abstract/constants";

export type Card = {
  cardNumberOrigin: string;
  cardNumberHidden: string;
  cardDate: string;
  cardOwnerName: string;
  cardCVC: string;
  cardPassword: [FirstPassword, SecondPassword];
  cardCompany: CardCompany;
};

export type CreditCard = Card & {
  cardName: string;
};

export type FirstPassword = string;
export type SecondPassword = string;

export type CardCompany =
  | (typeof COMPANY_LIST)[number]
  | typeof DEFAULT_COMPANY;
