import { CARD_COMPANY, CARD_COMPANY_KIND } from '@constants/cardCompany';

export interface CardInfo {
  id: string;
  company: CardCompanyType;
  title: string;
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
