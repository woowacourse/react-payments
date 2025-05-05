import { MASTER_CARD_CONDITIONS, VISA_CARD_CONDITIONS } from './constants';
import { DateType } from './domain/card/CardExpirationDate/types';
import { SequenceType } from './domain/card/CardNumber/types';

export const getCardType = (cardNumberFirst: string) => {
  if (VISA_CARD_CONDITIONS.some((value) => cardNumberFirst.startsWith(value))) return 'visa';
  if (MASTER_CARD_CONDITIONS.some((value) => cardNumberFirst.startsWith(value))) return 'master';
  return '';
};

export const getFirstErrorMessage = <T extends string>(cardNumberErrorMessage: Record<T, string>) => {
  const visibleErrors = Object.values(cardNumberErrorMessage).filter(
    (errorMassage): errorMassage is string => errorMassage !== '',
  );
  if (visibleErrors.length === 0) return '';

  return visibleErrors[0];
};

export const validateErrorMessages = <K extends SequenceType | DateType | string, T extends string | Record<K, string>>(
  errorMessage: T,
): boolean => {
  if (typeof errorMessage === 'string') {
    return errorMessage === '';
  }
  const isValid = Object.values(errorMessage).every((message) => message === '');

  return isValid;
};
