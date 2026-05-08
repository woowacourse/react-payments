import type {CardNumbersType} from '../../../common/types/CardInfoType';

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

export const maskCardNumbers = (chunks: CardNumbersType) =>
  chunks.map((chunk, i) => (i >= MASK_FROM_INDEX ? '·'.repeat(chunk.length) : chunk));

const matchVisa = (prefix: string) => prefix.startsWith('4');

const matchMasterCard = (prefix: string) => {
  const n = Number(prefix.slice(0, 2));
  return n >= 51 && n <= 55;
};

const matchAmex = (prefix: string) => prefix.startsWith('34') || prefix.startsWith('37');

const matchDiners = (prefix: string) => prefix.startsWith('36');

const matchUnionPay = (prefix: string) => {
  if (prefix.length >= 6) {
    const n6 = Number(prefix.slice(0, 6));
    if (n6 >= 622126 && n6 <= 622925) return true;
  }
  if (prefix.length >= 4) {
    const n4 = Number(prefix.slice(0, 4));
    if (n4 >= 6282 && n4 <= 6288) return true;
  }
  if (prefix.length >= 3) {
    const n3 = Number(prefix.slice(0, 3));
    if (n3 >= 624 && n3 <= 626) return true;
  }
  return false;
};

const BRAND_MATCHERS: {brand: CardBrandType; match: (prefix: string) => boolean}[] = [
  {brand: 'visa', match: matchVisa},
  {brand: 'masterCard', match: matchMasterCard},
  {brand: 'amex', match: matchAmex},
  {brand: 'diners', match: matchDiners},
  {brand: 'unionPay', match: matchUnionPay},
];

export const getBrandName = (cardNumbers: CardNumbersType): CardBrandType | null => {
  const prefix = cardNumbers.join('').slice(0, 6);
  if (!prefix) return null;
  return BRAND_MATCHERS.find(({match}) => match(prefix))?.brand ?? null;
};
