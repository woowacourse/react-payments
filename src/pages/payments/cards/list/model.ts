interface ExpirationDate {
  month: string;
  year: string;
}

export interface Card {
  id: string;
  card: string;
  cardNumbers: string;
  expirationDate: ExpirationDate;
}
