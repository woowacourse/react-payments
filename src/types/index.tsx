import ANIMATION from '@Constants/animation';
import CARD_COMPANY from '@Constants/cardCompany';

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
  company?: CreditCardCompanies;
  alias: string;
};

export type CreditCardCompanies = keyof typeof CARD_COMPANY;

export type AnimationTypes = keyof typeof ANIMATION;
