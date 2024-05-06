export interface ICardInfo {
  cardNumbers: [string, string, string, string];
  cardCompany: string;
  cardExpiration: [string, string];
  userName: string;
  cvc: string;
  password: string;
}

export interface IErrorMessage {
  cardNumbers: [string, string, string, string];
  cardCompany: [string];
  cardExpiration: [string, string];
  userName: [string];
  cvc: [string];
  password: [string];
}
