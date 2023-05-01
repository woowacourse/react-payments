import { CARD_COMPANIES } from '../constants';

export interface CardInfo {
  id: string;
  cardCompany: CardCompany;
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3?: string;
  cardNumber4?: string;
  expiredMonth: string;
  expiredYear: string;
  owner?: string;
  nickname?: string;
}

export type CardCompany = (typeof CARD_COMPANIES)[number];
