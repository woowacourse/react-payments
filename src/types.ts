export type CardNumber = [string, string, string, string];
export interface CardBrand {
  name: string;
  color: string;
}

export interface ExpDate {
  month: string;
  year: string;
}

export type Password = [string, string];

export interface Card {
  cardBrand: CardBrand;
  ownerName: string;
  password: Password;
  cardNumber: CardNumber;
  expDate: ExpDate;
  CVC: string;
  nickname?: string;
}
