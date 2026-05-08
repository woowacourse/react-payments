import {matchVisa, matchMasterCard, matchAmex, matchDiners, matchUnionPay} from './cardBrandMatchers';

export const CARD_COMPANIES = {
  bc: {name: 'BC카드', color: '#F04651'},
  shinhan: {name: '신한카드', color: '#0046FF'},
  kakao: {name: '카카오뱅크', color: '#FFE600'},
  hyundai: {name: '현대카드', color: '#000000'},
  woori: {name: '우리카드', color: '#007BC8'},
  lotte: {name: '롯데카드', color: '#ED1C24'},
  hana: {name: '하나카드', color: '#009490'},
  kookmin: {name: '국민카드', color: '#6A6056'},
} as const;

export type CardCompanyType = keyof typeof CARD_COMPANIES;

export const CARD_BRANDS = {
  visa:       {format: [4, 4, 4, 4], imageUrl: '/images/Visa.png'},
  masterCard: {format: [4, 4, 4, 4], imageUrl: '/images/Mastercard.png'},
  amex:       {format: [4, 6, 5],    imageUrl: '/images/amex-logo.svg'},
  diners:     {format: [4, 6, 4],    imageUrl: '/images/diners-club-logo.png'},
  unionPay:   {format: [4, 4, 4, 4], imageUrl: '/images/unionpay-logo.svg'},
} as const;

export type CardBrandType = keyof typeof CARD_BRANDS;

export const DEFAULT_CARD_NUMBER_FORMAT = [4, 4, 4, 4];

export const MASK_FROM_INDEX = 2;

export const maskCardNumbers = (chunks: string[]) =>
  chunks.map((chunk, i) => (i >= MASK_FROM_INDEX ? '·'.repeat(chunk.length) : chunk));

const BRAND_MATCHERS: {brand: CardBrandType; match: (prefix: string) => boolean}[] = [
  {brand: 'visa', match: matchVisa},
  {brand: 'masterCard', match: matchMasterCard},
  {brand: 'amex', match: matchAmex},
  {brand: 'diners', match: matchDiners},
  {brand: 'unionPay', match: matchUnionPay},
];

export const getBrandName = (cardNumbers: string[]): CardBrandType | null => {
  const prefix = cardNumbers.join('').slice(0, 6);
  if (!prefix) return null;
  return BRAND_MATCHERS.find(({match}) => match(prefix))?.brand ?? null;
};
