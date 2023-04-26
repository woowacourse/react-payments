import CARD_COMPANY from '@Constants/CardCompany';

export type CreditCardPasswordType = {
  first: string;
  second: string;
};

export type CreditCard = {
  id: number;
  number: string;
  expiry: string;
  owner?: string;
  cvc: string;
  password: CreditCardPasswordType;
  company?: CardCompanies;
  alias: string;
};

export type CardCompanies = keyof typeof CARD_COMPANY;
