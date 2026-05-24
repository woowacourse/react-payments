export interface SendingData {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

export interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}
