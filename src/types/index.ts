export type CardCompany =
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드';

export type CardNumber = string[];
export type OwnerName = string;
export type SecurityCode = string;
export type Password = string[];

export interface ExpirationDate {
  month: string;
  year: string;
}

export interface Card {
  cardCompany: CardCompany;
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  ownerName: OwnerName;
  securityCode: SecurityCode;
  password: Password;
}
