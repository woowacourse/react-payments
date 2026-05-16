import type { CardBrandType } from '../types/cardStausTypes';

type CardNumberMaskType = 'default' | 'special';

type CardBrandSpec = {
  numberGroups: number[];
  maskType: CardNumberMaskType;
};

const DEFAULT_CARD_BRAND_SPEC: CardBrandSpec = {
  numberGroups: [4, 4, 4, 4],
  maskType: 'default',
};

const CARD_BRAND_SPECS: Partial<Record<CardBrandType, CardBrandSpec>> = {
  visa: DEFAULT_CARD_BRAND_SPEC,
  master: DEFAULT_CARD_BRAND_SPEC,
  unionPay: DEFAULT_CARD_BRAND_SPEC,
  diners: {
    numberGroups: [4, 4, 4, 2],
    maskType: 'special',
  },
  amex: {
    numberGroups: [4, 4, 4, 3],
    maskType: 'special',
  },
};

export function getCardBrand(cardNumber: string): CardBrandType {
  if (cardNumber.startsWith('4')) {
    return 'visa';
  }

  const firstTwoDigits = Number(cardNumber.slice(0, 2));

  if (firstTwoDigits >= 51 && firstTwoDigits <= 55) {
    return 'master';
  }

  if (firstTwoDigits === 36) {
    return 'diners';
  }

  if (firstTwoDigits === 34 || firstTwoDigits === 37) {
    return 'amex';
  }

  const firstSixDigits = Number(cardNumber.slice(0, 6));

  if (isUnionPayPrefix(firstSixDigits)) {
    return 'unionPay';
  }

  return 'unknown';
}

export function getCardNumberLength(cardBrand: CardBrandType): number {
  return getCardNumberGroups(cardBrand).reduce((total, groupLength) => total + groupLength, 0);
}

export function getCardNumberGroups(cardBrand: CardBrandType): number[] {
  return CARD_BRAND_SPECS[cardBrand]?.numberGroups ?? DEFAULT_CARD_BRAND_SPEC.numberGroups;
}

export function getCardNumberMaskType(cardBrand: CardBrandType): CardNumberMaskType {
  return CARD_BRAND_SPECS[cardBrand]?.maskType ?? DEFAULT_CARD_BRAND_SPEC.maskType;
}

export function isPossibleCardBrandPrefix(cardNumber: string): boolean {
  if (cardNumber === '') {
    return true;
  }

  if (getCardBrand(cardNumber) !== 'unknown') {
    return true;
  }

  if (cardNumber.length === 1) {
    return ['3', '4', '5', '6'].includes(cardNumber);
  }

  if (cardNumber.startsWith('3')) {
    return ['34', '36', '37'].some((prefix) => prefix.startsWith(cardNumber));
  }

  if (cardNumber.startsWith('5')) {
    const firstTwoDigits = Number(cardNumber.slice(0, 2));
    return firstTwoDigits >= 51 && firstTwoDigits <= 55;
  }

  return isPossibleUnionPayPrefix(cardNumber);
}

function isPossibleUnionPayPrefix(cardNumber: string): boolean {
  if (!cardNumber.startsWith('62')) {
    return false;
  }

  if (cardNumber.length < 6) {
    const minPrefix = Number(cardNumber.padEnd(6, '0'));
    const maxPrefix = Number(cardNumber.padEnd(6, '9'));

    return (
      isRangeOverlapped(minPrefix, maxPrefix, 622126, 622925) ||
      isRangeOverlapped(minPrefix, maxPrefix, 624000, 626999) ||
      isRangeOverlapped(minPrefix, maxPrefix, 628200, 628899)
    );
  }

  return isUnionPayPrefix(Number(cardNumber.slice(0, 6)));
}

function isRangeOverlapped(
  minPrefix: number,
  maxPrefix: number,
  rangeMin: number,
  rangeMax: number,
): boolean {
  return minPrefix <= rangeMax && maxPrefix >= rangeMin;
}

function isUnionPayPrefix(prefix: number): boolean {
  return (
    (prefix >= 622126 && prefix <= 622925) ||
    (prefix >= 624000 && prefix <= 626999) ||
    (prefix >= 628200 && prefix <= 628899)
  );
}
