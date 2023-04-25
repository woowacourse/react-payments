export interface ExpirationDate {
  month: string;
  year: string;
}

export interface CardNumber {
  [key: string]: string;
  number1: string;
  number2: string;
  number3: string;
  number4: string;
}
