import { CARD, CARD_EXPIRATION, CARD_OWNER } from '../constants/Condition';
import { isValidForm, isValidLength, isValidRange } from '../utils/validation';

export const isVisaCard = (cardNumbers: string[]) => {
  return Number(cardNumbers[0].charAt(0)) === CARD.VISA;
};

export const isMasterCard = (cardNumbers: string[]) => {
  return (
    Number(cardNumbers[0].slice(0, 2)) >= CARD.MIN_MASTER_CARD &&
    Number(cardNumbers[0].slice(0, 2)) <= CARD.MAX_MASTER_CARD
  );
};

export const validateMonth = (month: string) =>
  isValidLength(month, 2) &&
  isValidRange(Number(month), CARD_EXPIRATION.MIN_MONTH_RANGE, CARD_EXPIRATION.MAX_MONTH_RANGE);

export const validateYear = (year: string) => isValidLength(year, 2);

export const validateOwner = (owner: string) =>
  isValidForm(owner, CARD_OWNER.VALID_REGEX) && isValidRange(owner.length, 1, CARD_OWNER.MAX_LENGTH);

export const validateCVC = (cvc: string) => isValidLength(cvc, 3);

export const validatePassword = (password: string) => isValidLength(password, 2);
