import type { ErrorStatus, ExpirationPeriodErrorStatus } from './types';

export const ROUTES = {
  ADD_CARD: '/',
  ADD_CARD_COMPLETE: '/complete',
};

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
