import {matchVisa, matchMasterCard, matchAmex, matchDiners, matchUnionPay} from './cardBrandMatchers';

// 브랜드 데이터
export const CARD_BRANDS = {
  visa: {format: [4, 4, 4, 4], imageUrl: '/images/Visa.svg'},
  masterCard: {format: [4, 4, 4, 4], imageUrl: '/images/mastercard-logo.svg'},
  amex: {format: [4, 6, 5], imageUrl: '/images/amex-logo.svg'},
  diners: {format: [4, 6, 4], imageUrl: '/images/diners-logo.svg'},
  unionPay: {format: [4, 4, 4, 4], imageUrl: '/images/unionpay-logo.svg'},
} as const;

export const DEFAULT_CARD_NUMBER_FORMAT = [4, 4, 4, 4];

export type CardBrandType = keyof typeof CARD_BRANDS;

// 브랜드 감지
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

export const getFormatByBrand = (brand: CardBrandType | null): number[] =>
  brand ? [...CARD_BRANDS[brand].format] : DEFAULT_CARD_NUMBER_FORMAT;

export const getCardNumberErrorMsg = (digits: number) => `카드 번호 ${digits}자리를 입력해 주세요`;
