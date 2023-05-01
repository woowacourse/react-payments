import { CARD_COMPANIES, CARD_COMPANY_KEYS } from '../constants';

export type CardCompany = (typeof CARD_COMPANIES)[number];
export type CardCompanyKey = (typeof CARD_COMPANY_KEYS)[number];
export type CardAlias = string;
export type CardNumber = string[];
export type OwnerName = string;
export type SecurityCode = string;
export type Password = string[];

export interface ExpirationDate {
  month: string;
  year: string;
}

export interface Card {
  id: string;
  cardAlias?: CardAlias;
  cardCompany: CardCompany;
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  ownerName: OwnerName;
  securityCode: SecurityCode;
  password: Password;
}
