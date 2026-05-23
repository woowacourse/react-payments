interface ExpirationDate {
  month: string;
  year: string;
}

export interface RegisterCardModel {
  cardNumbers: { [key in '0' | '1' | '2' | '3']: string };
  card: string;
  cvc: string;
  expirationDate: ExpirationDate;
}
