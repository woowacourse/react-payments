export default interface CardType {
  id: string;
  cardNumbers: Array<string>;
  expiredDates: { 0: string; 1: string };
  cardOwnerName: string;
  cardCompany: string;
  cardAlias?: string;
}
