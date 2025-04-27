export const NO_ERROR: [number, string] = [-1, ''];

export enum ErrorKey {
  CARD_NUMBER = 'cardNumberError',
  CARD_EXPIRATION_DATE = 'cardExpirationDateError',
  CARD_CVC = 'cardCVCError',
}

export const ERROR_MESSAGES = Object.freeze({
  CARD_NUMBER: {
    NOT_NUMERIC: '카드 번호는 숫자만 입력 가능합니다.',
    NOT_FOUR_DIGIT: '카드 번호는 4자리어야 합니다.',
    INVALID_TYPE: '카드 번호는 4 또는 51~55로 시작해야 합니다.',
  },
  CARD_EXPIRATION_DATE: {
    MONTH_NOT_NUMERIC: '유효 월은 숫자만 입력 가능합니다.',
    MONTH_INVALID_RANGE: '유효 월은 1월과 12월 사이만 입력 가능합니다.',
    MONTH_NOT_TWO_DIGIT: '유효 월은 2자리 숫자여야 합니다.',
    YEAR_NOT_NUMERIC: '유효 연도는 숫자만 입력 가능합니다.',
    YEAR_NOT_TWO_DIGIT: '유효 연도는 2자리 숫자여야 합니다.',
  },
  CARD_CVC: {
    NOT_NUMERIC: 'CVC는 숫자만 입력 가능합니다.',
    NOT_THREE_DIGIT: 'CVC는 3자리어야 합니다.',
  },
});
