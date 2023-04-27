export interface CardType {
  id: string;
  cardNumbers: Record<number, string>;
  expiredDate: Record<number, string>;
  cardOwnerName: string;
  cardCompany: string;
}
