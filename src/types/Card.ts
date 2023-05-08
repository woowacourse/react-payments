import { ExpiredDatesType } from './ExpiredDate';

export default interface CardType {
  id: string;
  cardNumbers: Array<string>;
  expiredDates: ExpiredDatesType;
  cardOwnerName: string;
  cardCompany: string;
  cardAlias?: string;
}
