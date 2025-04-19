import { CardNumber, CardExpirationDate } from '../../types/types';
import { CARD_EXPIRATION, CARD_NUMBER, CARD_CVC } from '../constants';

export const isValidCardNumber = (cardNumber: CardNumber): boolean => {
  const hasNull = Object.values(cardNumber).some((value) => value === null);
  if (hasNull) return false;

  const hasValidLength = Object.values(cardNumber).every(
    (value) =>
      value !== null && value.toString().length === CARD_NUMBER.maxLength
  );

  return !hasNull && hasValidLength;
};

export const isValidExpirationDate = (
  expirationDate: CardExpirationDate
): boolean => {
  const { month, year } = expirationDate;

  if (!month || !year) return false;

  const monthValue = Number(month);
  const yearValue = Number(year);

  const hasValidLength =
    month.length === CARD_EXPIRATION.monthLength &&
    year.length === CARD_EXPIRATION.yearLength;

  const isInValidRange =
    monthValue >= CARD_EXPIRATION.minMonth &&
    monthValue <= CARD_EXPIRATION.maxMonth &&
    yearValue >= CARD_EXPIRATION.minYear;

  return hasValidLength && isInValidRange;
};

export const isValidCVC = (cvc: number | null): boolean => {
  if (cvc === null) return false;

  const cvcStr = cvc.toString();
  return cvcStr.length === CARD_CVC.maxLength;
};
