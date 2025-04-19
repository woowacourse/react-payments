import { MASTER_CARD_CONDITIONS, VISA_CARD_CONDITIONS } from './constants';

export const getCardType = (cardNumberFirst: string) => {
  if (VISA_CARD_CONDITIONS.some((value) => cardNumberFirst.startsWith(value))) return 'visa';
  if (MASTER_CARD_CONDITIONS.some((value) => cardNumberFirst.startsWith(value))) return 'master';
  return '';
};
