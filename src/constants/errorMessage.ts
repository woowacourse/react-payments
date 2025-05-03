export const CARD_NUMBER_ERROR = {
  NOT_A_NUMBER: '카드 번호는 숫자로 입력해 주세요.',
  INVALID_LENGTH: '카드 번호는 4자리로 입력해 주세요.',
  INVALID_CARD_NUMBER: '유효하지 않은 카드 번호입니다.',
} as const;

export const CVC_ERROR = {
  INVALID_LENGTH: 'CVC는 3자리로 입력해 주세요.',
  NOT_A_NUMBER: 'CVC는 숫자로 입력해 주세요.',
} as const;

export const EXPIRYDATE_ERROR = {
  INVALID_YEAR_LENGTH_ERROR: '연도는 2자리로 입력해 주세요.',
  INVALID_MONTH_LENGTH_ERROR: '월은 2자리로 입력해 주세요.',
  YEAR_IS_NOT_A_NUMBER: '연도는 숫자로 입력해 주세요.',
  MONTH_IS_NOT_A_NUMBER: '월은 숫자로 입력해 주세요.',
  INVALID_YEAR: '유효하지 않은 연도입니다.',
  INVALID_MONTH: '유효하지 않은 월입니다.',
} as const;

export const PASSWORD_ERROR = {
  INVALID_LENGTH: '카드 비밀번호는 2자리로 입력해 주세요.',
  NOT_A_NUMBER: '카드 비밀번호는 숫자로 입력해 주세요.',
};
