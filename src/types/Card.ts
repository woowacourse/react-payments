export interface Card {
  number1: string;
  number2: string;
  number3: string;
  number4: string;
  month: string;
  year: string;
  name: string;
  code?: string;
  password1?: string;
  password2?: string;
  bank: string;
  color: string;
}

export interface CardNumber {
  number1: string;
  number2: string;
  number3: string;
  number4: string;
}

export interface Expiration {
  month: string;
  year: string;
}

export interface Name {
  name: string;
}

export interface Bank {
  bank: string;
  color: string;
}
