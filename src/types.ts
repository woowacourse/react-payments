import { PAGE } from './constant';

export interface CardInfo {
  id: string;
  cardNumber: {
    fisrt: string;
    second: string;
    third: string;
    fourth: string;
  };
  expiracy: {
    month: string;
    year: string;
  };
  owner: string;
}

export type PageInfo = (typeof PAGE)[number];
