import type { CardBrand, CardInfo } from '../types';
import { categorizeCardBrand } from '../utils';

const CARD_TOTAL_LENGTH: Partial<Record<CardBrand, number>> = {
  amex: 15,
  diners: 14,
};

const CARD_CVC_MAX_LENGTH: Partial<Record<CardBrand, number>> = {
  amex: 4,
};

const DEFAULT_CVC_LENGTH = 3;
const DEFAULT_CARD_TOTAL_LENGTH = 16;

export default function useCardBrand(cardNumbers: CardInfo['cardNumbers']) {
  const cardBrand = categorizeCardBrand(cardNumbers);
  const cvcLength = CARD_CVC_MAX_LENGTH[cardBrand] ?? DEFAULT_CVC_LENGTH;
  const cardNumbersTotalLength = CARD_TOTAL_LENGTH[cardBrand] ?? DEFAULT_CARD_TOTAL_LENGTH;

  return { cardBrand, cvcLength, cardNumbersTotalLength };
}
