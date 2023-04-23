export type CardNumber = string[];
export type OwnerName = string;
export type SecurityCode = string;

export interface ExpirationDate {
  month: string;
  year: string;
}

export interface PassWord {
  firstPassword: string;
  secondPassword: string;
}

export interface Card {
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  ownerName: OwnerName;
  securityCode: SecurityCode;
  password: PassWord;
}
