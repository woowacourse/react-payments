export const VISA_CARD_CONDITIONS = ['4'];
export const MASTER_CARD_CONDITIONS = ['51', '52', '53', '54', '55'];
export const MASKING = '·';

export const ERROR_MESSAGE = {
  onlyNumber: '숫자만 입력해주세요.',
  validMonth: '유효한 월을 입력해주세요.',
  pastYear: '유효기간이 지난 것 같아요.',
} as const;

export const DECIMAL_RADIX = 10;
export const MIN_VALID_MONTH = 1;
export const MAX_VALID_MONTH = 12;
export const ONLY_NUMBER_PATTERN = /^[0-9]*$/;
