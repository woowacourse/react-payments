import { MASTER_CARD_CONDITIONS, VISA_CARD_CONDITIONS } from '@/constants';
import { CardType } from '@/types';

export const getCardType = (cardNumberFirst: string): CardType => {
  if (VISA_CARD_CONDITIONS.some((value) => cardNumberFirst.startsWith(value))) return 'visa';
  if (MASTER_CARD_CONDITIONS.some((value) => cardNumberFirst.startsWith(value))) return 'master';
  return 'etc';
};
