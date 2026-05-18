import {
  CARD_BRAND_NUMBER_GROUP_LENGTHS,
  CARD_BRAND_PREFIX_RANGES,
  DEFAULT_CARD_NUMBER_GROUP_LENGTHS,
} from '../constants/cardBrands';
import type { CardBrand } from '../types/cardStausTypes';

function isPrefixInRange(cardNumber: string, start: string, end: string) {
  const prefixLength = Math.min(cardNumber.length, start.length);
  const prefix = Number(cardNumber.slice(0, prefixLength));
  const rangeStart = Number(start.slice(0, prefixLength));
  const rangeEnd = Number(end.slice(0, prefixLength));

  return prefix >= rangeStart && prefix <= rangeEnd;
}

function isExactPrefixInRange(cardNumber: string, start: string, end: string) {
  if (cardNumber.length < start.length) {
    return false;
  }

  const prefix = Number(cardNumber.slice(0, start.length));

  return prefix >= Number(start) && prefix <= Number(end);
}

export function getCardBrand(cardNumber: string): CardBrand {
  return (
    CARD_BRAND_PREFIX_RANGES.find(({ start, end }) => isExactPrefixInRange(cardNumber, start, end))
      ?.brand ?? ''
  );
}

export function hasPotentialCardBrand(cardNumber: string) {
  if (cardNumber === '') {
    return true;
  }

  return CARD_BRAND_PREFIX_RANGES.some(({ start, end }) => isPrefixInRange(cardNumber, start, end));
}

export function getCardNumberGroupLengths(cardBrand: CardBrand) {
  return cardBrand === ''
    ? DEFAULT_CARD_NUMBER_GROUP_LENGTHS
    : CARD_BRAND_NUMBER_GROUP_LENGTHS[cardBrand];
}

export function splitCardNumberByBrand(cardNumber: string, cardBrand: CardBrand) {
  const groupLengths = getCardNumberGroupLengths(cardBrand);
  let cursor = 0;

  return groupLengths.map((length) => {
    const group = cardNumber.slice(cursor, cursor + length);
    cursor += length;
    return group;
  });
}

export function isValidCardNumber(cardNumbers: string[], cardBrand: CardBrand) {
  const cardNumber = cardNumbers.join('');
  const groupLengths = getCardNumberGroupLengths(cardBrand);

  return (
    cardBrand !== '' &&
    getCardBrand(cardNumber) === cardBrand &&
    cardNumbers.length === groupLengths.length &&
    cardNumbers.every((cardNumberGroup, index) => cardNumberGroup.length === groupLengths[index])
  );
}
