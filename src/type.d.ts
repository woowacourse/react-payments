export type CardNumbers = [string, string, string, string];
export type CardIssuer = '' | 'Visa' | 'MasterCard';
export type CardExpiredDate = [string, string];
export interface CardInfo {
  cardNumbers: CardNumbers;
  cardIssuer: CardIssuer;
  expiredDate: CardExpiredDate;
  cardHolder: string;
}
