import { PAGE } from './constant';

export interface CardInfo {
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
  cvc: string;
  password: {
    first: string;
    second: string;
  };
}

export type PageInfo = (typeof PAGE)[number];
