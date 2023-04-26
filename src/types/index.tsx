import CARD_COMPANY from '@Constants/CardCompany';

export type CreditCardPasswordType = {
  first: string;
  second: string;
};

export type CreditCard = {
  number: string;
  expiry: string;
  owner?: string;
  cvc: string;
  password: CreditCardPasswordType;
};

export type CardCompanies = keyof typeof CARD_COMPANY;
