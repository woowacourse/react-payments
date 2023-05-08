import { Card } from 'components/common/Card/types';
import {
  MAX_DATE_LENGTH,
  MAX_NUMBER_LENGTH,
  MAX_PASSWORD_LENGTH,
  MAX_SECURITY_CODE_LENGTH,
} from '../constants';

export const validateCard = (card: Card) => {
  return (
    card.numbers.every((number) => number.length === MAX_NUMBER_LENGTH) &&
    card.expirationDate.month.length === MAX_DATE_LENGTH &&
    card.expirationDate.year.length === MAX_DATE_LENGTH &&
    card.securityCode.length === MAX_SECURITY_CODE_LENGTH &&
    card.password.first.length === MAX_PASSWORD_LENGTH &&
    card.password.second.length === MAX_PASSWORD_LENGTH
  );
};
