export interface CardNumber {
  first: number;
  second: number;
  third: number;
  fourth: number;
}

export interface Card {
  id: number;
  cardName: string;
  cardColor: string;
  ownerName: string;
  cardNumber: CardNumber;
  expirationDate: { month: number; year: number };
  cvc: number;
  nickname?: string;
}
