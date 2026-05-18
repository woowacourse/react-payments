import type { CardBrand, CardBrandRange } from '../types/cardStatusTypes';

export const DEFAULT_CARD_NUMBER_GROUP_LENGTHS = [4, 4, 4, 4];

export const CARD_BRAND_NUMBER_GROUP_LENGTHS: Record<Exclude<CardBrand, ''>, number[]> = {
  visa: [4, 4, 4, 4],
  master: [4, 4, 4, 4],
  diners: [4, 6, 4],
  amex: [4, 6, 5],
  unionpay: [4, 4, 4, 4],
};

export const CARD_BRAND_PREFIX_RANGES: CardBrandRange[] = [
  { brand: 'visa', start: '4', end: '4' },
  { brand: 'master', start: '51', end: '55' },
  { brand: 'diners', start: '36', end: '36' },
  { brand: 'amex', start: '34', end: '34' },
  { brand: 'amex', start: '37', end: '37' },
  { brand: 'unionpay', start: '622126', end: '622925' },
  { brand: 'unionpay', start: '624', end: '626' },
  { brand: 'unionpay', start: '6282', end: '6288' },
];
