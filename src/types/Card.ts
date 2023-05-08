import { CardNumbersType } from './CardNumbers';
import { ExpiredDatesType } from './ExpiredDate';

export default interface CardType {
  id: string;
  cardNumbers: CardNumbersType;
  expiredDates: ExpiredDatesType;
  cardOwnerName: string;
  cardCompany: string;
  cardAlias?: string;
}
