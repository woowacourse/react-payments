import type { ErrorStatus, ExpirationPeriodErrorStatus } from './types';

export const ROUTES = {
  CARD_LIST: '/card',
  ADD_CARD: '/card/add',
  ADD_CARD_COMPLETE: '/card/add/complete',
};

export const CARD_COMPANIES = {
  '31': {
    en: 'BC',
    kr: 'BC카드',
    color: 'var(--color-text-card)',
    backgroundColor: 'var(--color-brand-bc-card)',
  },
  '41': {
    en: 'SHINHAN',
    kr: '신한카드',
    color: 'var(--color-text-card)',
    backgroundColor: 'var(--color-brand-shinhan-card)',
  },
  '15': {
    en: 'KAKAOBANK',
    kr: '카카오뱅크',
    color: 'var(--color-text-default)',
    backgroundColor: 'var(--color-brand-kakaobank)',
  },
  '61': {
    en: 'HYUNDAI',
    kr: '현대카드',
    color: 'var(--color-text-card)',
    backgroundColor: 'var(--color-brand-hyundai-card)',
  },
  W1: {
    en: 'WOORI',
    kr: '우리카드',
    color: 'var(--color-text-card)',
    backgroundColor: 'var(--color-brand-woori-card)',
  },
  '71': {
    en: 'LOTTE',
    kr: '롯데카드',
    color: 'var(--color-text-card)',
    backgroundColor: 'var(--color-brand-lotte-card)',
  },
  '21': {
    en: 'HANA',
    kr: '하나카드',
    color: 'var(--color-text-card)',
    backgroundColor: 'var(--color-brand-hana-card)',
  },
  '11': {
    en: 'KOOKMIN',
    kr: '국민카드',
    color: 'var(--color-text-card)',
    backgroundColor: 'var(--color-brand-kb-card)',
  },
} as const;

export const ERROR_MESSAGES: Record<Exclude<ErrorStatus, null>, string> = {
  required: '필수 입력 항목입니다.',
  invalidLength: '입력 길이가 올바르지 않습니다.',
  numberOnly: '숫자만 입력 가능합니다.',
};

export const EXPIRATION_PERIOD_ERROR_MESSAGES: Record<Exclude<ExpirationPeriodErrorStatus, null>, string> = {
  ...ERROR_MESSAGES,
  invalidMonth: '올바른 월을 입력하세요.',
  invalidYear: '올바른 연도를 입력하세요.',
};

export const CARD_NUMBERS_LENGTH = [4, 4, 4, 4];
export const DINERS_CARD_NUMBERS_LENGTH = [4, 4, 4, 2];
export const AMEX_CARD_NUMBERS_LENGTH = [4, 4, 4, 3];

export const EXPIRATION_PERIOD_LENGTH = [2, 2];

export const CVC_LENGTH = 3;
export const AMEX_CVC_LENGTH = 4;

export const PASSWORD_LENGTH = 2;
