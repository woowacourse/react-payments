import { CARD_COMPANY } from '../constants/cardCompany';

export interface Card {
  CARD_NUMBER: string;
  DATE: string;
  USERNAME?: string;
  CODE: string;
  CARD_PASSWORD: string;
}

export type CardInfoOption = keyof Card;

export type CardCompanyOption = keyof typeof CARD_COMPANY;

export interface CompanyDetail {
  name: string;
  color: string;
}
