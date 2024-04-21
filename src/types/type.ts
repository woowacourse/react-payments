export interface ICardInfo {
  cardNumbers: [number, number, number, number];
  cardExpiration: [number, number];
  userName: string;
}

export interface IErrorMessage {
  cardNumbers: [string, string, string, string];
  cardExpiration: [string, string];
  userName: [string];
}
