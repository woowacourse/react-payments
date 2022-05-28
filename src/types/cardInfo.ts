export interface cardNumber {
  firstColumn: string;
  secondColumn: string;
  thirdColumn: string;
  forthColumn: string;
}

export interface expirationDate {
  month: string;
  year: string;
}

export interface password {
  firstNumber: string;
  secondNumber: string;
}

export interface cardInfo {
  cardNumber: cardNumber;
  expirationDate: expirationDate;
  ownerName: string;
  securityCode: string;
  password: password;
  cardNickName: string;
}
