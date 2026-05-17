export const ERROR_MESSAGE = {
  INVALID_TYPE: '숫자만 입력 가능합니다.',
  INVALID_CARD_BRAND_NUMBER: '유효한 카드 브랜드 번호를 입력해주세요.',
  NAN: '숫자만 입력 가능합니다.',
  MAX_LENGTH: (length: number) => `숫자는 ${length}자리를 입력해야 합니다.`,
  INVALID_MONTH: '월은 1~12 사이의 숫자만 입력 가능합니다.',
  INVALID_YEAR: '년도는 현재 년도 이상만 입력 가능합니다.',
} as const;

export const VALIDATION_RULE = {
  EXPIRATION_DATE_LENGTH: 2,
  CVC_LENGTH: 3,
  MAX_MONTH: 12,
  PASSWORD_LENGTH: 2,
} as const;
