export interface ExpiryDate {
  month: string;
  year: string;
}

export interface Card {
  cardBrand: string;
  cardNumbers: string;
  expiryDate: ExpiryDate;
  userName: string;
  cardCompany: string;
  cvc: string;
  password: string;
}
