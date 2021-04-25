export interface CardNumber {
  first: number[];
  second: number[];
  third: number[];
  fourth: number[];
}

export interface CardBrand {
  name: string;
  color: string;
}

export interface ExpDate {
  month: string;
  year: string;
}

export interface Card {
  id: number;
  cardBrand: CardBrand;
  ownerName: string;
  password: [string, string];
  cardNumber: CardNumber;
  expDate: ExpDate;
  cvc: string;
  nickname?: string;
}
