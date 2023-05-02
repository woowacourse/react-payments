import { CARD_COMPANY_KIND } from '@constants/cardCompany';

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

export type CardCompanyType = (typeof CARD_COMPANY_KIND)[number] | 'default';

export interface CardCompanyDetail {
  source: string;
  title: string;
  backgroundColor: string;
  color: string;
}
