declare interface CardNumber {
  first: number;
  second: number;
  third: number;
  fourth: number;
}

declare interface Card {
  id: number;
  cardName: string;
  cardColor: string;
  ownerName: string;
  cardNumber: CardNumber;
  expirationDate: Date;
  cvc: number;
  nickname?: string;
}
