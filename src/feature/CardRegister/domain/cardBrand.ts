import {matchVisa, matchMasterCard, matchAmex, matchDiners, matchUnionPay} from './cardBrandMatchers';

export const CARD_BRANDS = {
  visa: {format: [4, 4, 4, 4], imageUrl: '/images/Visa.png'},
  masterCard: {format: [4, 4, 4, 4], imageUrl: '/images/Mastercard.png'},
  amex: {format: [4, 6, 5], imageUrl: '/images/amex-logo.svg'},
  diners: {format: [4, 6, 4], imageUrl: '/images/diners-club-logo.png'},
  unionPay: {format: [4, 4, 4, 4], imageUrl: '/images/unionpay-logo.svg'},
} as const;

export const DEFAULT_CARD_NUMBER_FORMAT = [4, 4, 4, 4];

export type CardBrandType = keyof typeof CARD_BRANDS;

const MAX_BRAND_PREFIX_LENGTH = 6;

const BRAND_MATCHERS: {brand: CardBrandType; match: (prefix: string) => boolean}[] = [
  {brand: 'visa', match: matchVisa},
  {brand: 'masterCard', match: matchMasterCard},
  {brand: 'amex', match: matchAmex},
  {brand: 'diners', match: matchDiners},
  {brand: 'unionPay', match: matchUnionPay},
];

export const getBrandName = (cardNumbers: string[]): CardBrandType | null => {
  const prefix = cardNumbers.join('').slice(0, MAX_BRAND_PREFIX_LENGTH);
  if (!prefix) return null;
  return BRAND_MATCHERS.find(({match}) => match(prefix))?.brand ?? null;
};

