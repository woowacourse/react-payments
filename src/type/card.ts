import { CARD_COMPANY } from '../constants/cardCompany';

export interface Card {
  card_number: string;
  expired_date: string;
  username?: string;
  code: string;
  password: string;
  company: string;
  nickname?: string;
}

export type CardInfoOption = keyof Card;

export type CardCompanyOption = keyof typeof CARD_COMPANY;

export interface CompanyDetail {
  name: string;
  color: string;
}
