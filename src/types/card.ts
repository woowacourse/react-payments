export interface CardNumbers {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
}

export interface ExpiryDate {
  month: string;
  year: string;
}

export interface Card {
  cardNumbers: CardNumbers;
  expiryDate: ExpiryDate;
  userName: string;
}
