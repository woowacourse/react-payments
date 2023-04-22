export type Month = string;

export type Year = string;

export type CreditCard = {
  name: string;
  cardNumbers: string;
  expirationDate: [Month, Year];
  cvc: string;
  password: string;
};
