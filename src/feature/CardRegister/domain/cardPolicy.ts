import type {CardNumbersType} from '../../../common/types/CardInfoType';

// ── 카드사 (사용자 선택 → 카드 배경색) ────────────────────────────────────
export const CARD_COMPANIES = {
  bc:      {name: 'BC카드',     color: '#F04651'},
  shinhan: {name: '신한카드',   color: '#0046FF'},
  kakao:   {name: '카카오뱅크', color: '#FFE600'},
  hyundai: {name: '현대카드',   color: '#000000'},
  woori:   {name: '우리카드',   color: '#007BC8'},
  lotte:   {name: '롯데카드',   color: '#ED1C24'},
  hana:    {name: '하나카드',   color: '#009490'},
  kookmin: {name: '국민카드',   color: '#6A6056'},
} as const;

export type CardCompanyType = keyof typeof CARD_COMPANIES;

// ── 카드 브랜드 (번호 자동 감지 → 우상단 로고 · 입력 포맷) ────────────────
export type CardBrandType = 'visa' | 'masterCard' | 'amex' | 'diners' | 'unionPay';

export const CARD_FORMAT: Record<CardBrandType, number[]> = {
  visa:       [4, 4, 4, 4],
  masterCard: [4, 4, 4, 4],
  amex:       [4, 6, 5],
  diners:     [4, 6, 4],
  unionPay:   [4, 4, 4, 4],
};

export const DEFAULT_FORMAT = [4, 4, 4, 4];

export const BRAND_IMAGES: Record<CardBrandType, string> = {
  visa:       '/images/Visa.png',
  masterCard: '/images/Mastercard.png',
  amex:       '/images/amex-logo.svg',
  diners:     '/images/diners-club-logo.png',
  unionPay:   '/images/unionpay-logo.svg',
};

// ── 마스킹 ────────────────────────────────────────────────────────────────
export const MASK_FROM_INDEX = 2;

export const maskCardNumbers = (chunks: CardNumbersType) =>
  chunks.map((chunk, i) => (i >= MASK_FROM_INDEX ? '·'.repeat(chunk.length) : chunk));

// ── 브랜드 감지 ───────────────────────────────────────────────────────────
// 새 브랜드 추가 시: 아래에 match 함수 추가 → BRAND_MATCHERS에 등록
// → CARD_FORMAT, BRAND_IMAGES, CardBrandType에도 항목 추가
const matchVisa = (prefix: string) => prefix.startsWith('4');

const matchMasterCard = (prefix: string) => {
  const n = Number(prefix.slice(0, 2));
  return n >= 51 && n <= 55;
};

const matchAmex = (prefix: string) =>
  prefix.startsWith('34') || prefix.startsWith('37');

const matchDiners = (prefix: string) => prefix.startsWith('36');

const matchUnionPay = (prefix: string) => {
  if (prefix.length >= 6) {
    const n = Number(prefix.slice(0, 6));
    if (n >= 622126 && n <= 622925) return true;
  }
  if (prefix.length >= 3) {
    const n = Number(prefix.slice(0, 3));
    if (n >= 624 && n <= 626) return true;
  }
  if (prefix.length >= 4) {
    const n = Number(prefix.slice(0, 4));
    if (n >= 6282 && n <= 6288) return true;
  }
  return false;
};

const BRAND_MATCHERS: {brand: CardBrandType; match: (prefix: string) => boolean}[] = [
  {brand: 'visa',       match: matchVisa},
  {brand: 'masterCard', match: matchMasterCard},
  {brand: 'amex',       match: matchAmex},
  {brand: 'diners',     match: matchDiners},
  {brand: 'unionPay',   match: matchUnionPay},
];

export const getBrandName = (cardNumbers: CardNumbersType): CardBrandType | null => {
  const prefix = cardNumbers[0] ?? '';
  if (!prefix) return null;
  return BRAND_MATCHERS.find(({match}) => match(prefix))?.brand ?? null;
};
