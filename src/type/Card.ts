import {CARD_COMPANY} from '../components/constants/card';

export type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

export type ExpirationDate = {
  month: string;
  year: string;
};

export type CardCompany = keyof typeof CARD_COMPANY;
