import type { CardCompanyButtonProps } from '../components/CardCompanyButton';

export type Month = string;

export type Year = string;

export type CreditCard = {
  cardCompany: CardCompanyButtonProps['cardCompany'] | '카드사';
  name: string;
  cardNumbers: string;
  expirationDate: [Month, Year];
  cvc: string;
  password: string;
};
