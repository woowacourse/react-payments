import {matchVisa, matchMasterCard, matchAmex, matchDiners, matchUnionPay} from './cardBrandMatchers';

// card numbers 기본 format
export const DEFAULT_CARD_NUMBER_FORMAT = [4, 4, 4, 4];

// 카드 브랜드별 format과 로고 이미지
export const CARD_BRANDS = {
  visa: {format: [4, 4, 4, 4], logoImageUrl: '/images/Visa.svg'},
  masterCard: {format: [4, 4, 4, 4], logoImageUrl: '/images/mastercard-logo.svg'},
  amex: {format: [4, 6, 5], logoImageUrl: '/images/amex-logo.svg'},
  diners: {format: [4, 6, 4], logoImageUrl: '/images/diners-logo.svg'},
  unionPay: {format: [4, 4, 4, 4], logoImageUrl: '/images/unionpay-logo.svg'},
} as const;

// brand type 정의
export type CardBrandType = keyof typeof CARD_BRANDS;

// 브랜드 감지 matchers
const BRAND_MATCHERS: {brand: CardBrandType; match: (cardNumber: string) => boolean}[] = [
  {brand: 'visa', match: matchVisa},
  {brand: 'masterCard', match: matchMasterCard},
  {brand: 'amex', match: matchAmex},
  {brand: 'diners', match: matchDiners},
  {brand: 'unionPay', match: matchUnionPay},
];

// param: cardNumbers
// return: 일치하는 브랜드
export const getBrandName = (cardNumbers: string[]): CardBrandType | null => {
  const fullCardNumber = cardNumbers.join('');

  if (!fullCardNumber) return null;

  return BRAND_MATCHERS.find(({match}) => match(fullCardNumber))?.brand ?? null;
};

// param: brandName
// return: brandFormat
export const getFormatByBrand = (brand: CardBrandType | null): number[] =>
  brand ? [...CARD_BRANDS[brand].format] : DEFAULT_CARD_NUMBER_FORMAT;

export const getCardNumberErrMsg = (digits: number) => `카드 번호 ${digits}자리를 입력해 주세요`;
