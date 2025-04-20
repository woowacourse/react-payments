import { MASTER_CARD_CONDITIONS, VISA_CARD_CONDITIONS } from './constants';

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
