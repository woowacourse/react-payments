import { CARD_COMPANY, CARD_COMPANY_KIND } from '@constants/cardCompany';

export interface CardInputInfo {
  company: CardCompanyType;
  cardNumber: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  expirationDate: {
    month: string;
    year: string;
  };
  owner: string;
}

export interface CardInfo extends CardInputInfo {
  id: string;
  title: string;
}

export type CardCompanyRecord = Record<CardCompanyType, CardCompanyDetail>;

export type CardCompanyType =
  | (typeof CARD_COMPANY_KIND)[number]
  | typeof CARD_COMPANY.DEFAULT;

export interface CardCompanyDetail {
  SOURCE: string;
  TITLE: string;
  BACKGROUND_COLOR: string;
  COLOR: string;
}
