import type { ErrorStatus, ExpirationPeriodErrorStatus } from './types';

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

export const CARD_NUMBER_LENGTH_PER_INPUT = 4;
export const PERIOD_LENGTH_PER_INPUT = 2;
export const CVC_LENGTH = 3;
export const PASSWORD_LENGTH = 2;

export const CARD_COMPANY_OPTIONS = [
  { label: '카드사를 선택해 주세요', value: '' },
  { label: 'BC카드', value: 'bc' },
  { label: '신한카드', value: 'shinhan' },
  { label: '카카오뱅크', value: 'kakao' },
  { label: '현대카드', value: 'hyundai' },
  { label: '우리카드', value: 'woori' },
  { label: '롯데카드', value: 'lotte' },
  { label: 'NH농협카드', value: 'nh' },
  { label: '하나카드', value: 'hana' },
] as const;

export const FIELD_STEP = {
  cardNumbers: 0,
  cardCompany: 1,
  expirationPeriod: 2,
  cvc: 3,
  password: 4,
};
