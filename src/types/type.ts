export interface ICardInfo {
  cardCompany: string;
  cardNumbers: [string, string, string, string];
  cardExpiration: [number, number];
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
