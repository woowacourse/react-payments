export interface CardNumber {
  first: number[];
  second: number[];
  third: number[];
  fourth: number[];
}

export interface ExpDate {
  month: string;
  year: string;
}

export interface Card {
  id: number;
  cardName: string;
  cardColor: string;
  ownerName: string;
  password: string;
  cardNumber: CardNumber;
  expDate: ExpDate;
  cvc: string;
  nickname?: string;
}
