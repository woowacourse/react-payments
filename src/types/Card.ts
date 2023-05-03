export interface Card {
  cardNumber: CardNumber;
  date: Expiration;
  name: Name;
  code?: string;
  password1?: string;
  password2?: string;
  cardCompany: CardCompany;
  cardName?: CardName;
}

export type CardNumber = {
  number1: string;
  number2: string;
  number3: string;
  number4: string;
};

export type Expiration = {
  month: string;
  year: string;
};

export type Name = string;

export type CardCompany = {
  company: string;
  color: string;
};

export type CardName = string;
