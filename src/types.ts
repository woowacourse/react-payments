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

export type BankDataRecord = Record<BankType, BankDataDetail>;

export type PageInfo = (typeof PAGE)[number];

export type BankType =
  | 'default'
  | 'bc'
  | 'shinhan'
  | 'kakao'
  | 'hyundai'
  | 'woori'
  | 'lotte'
  | 'hana'
  | 'kb';

export interface BankDataDetail {
  source: string;
  title: string;
  backgroundColor: string;
  color: string;
}
