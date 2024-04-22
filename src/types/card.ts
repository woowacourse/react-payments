export interface Card {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
  month: string;
  year: string;
  userName: string;
}

export interface CardInfo {
  cardNumbers : CardNumbers;
  expirationDate : ExpirationDate;
  userName : string;
}

export interface CardNumbers {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
}

export interface ExpirationDate {
  month : string,
  year : string
}

