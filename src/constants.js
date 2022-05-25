export const MAX_LENGTH = {
  CARD_NUMBER: 4,
  DATE: 2,
  NAME: 30,
  SECURITY_CODE: 3,
  PASSWORD: 1,
  CARDNICK: 10,
};

export const MIN_LENGTH = {
  NAME: 2,
  MONTH: 1,
  CARDNICK: 1,
};

export const RANGE = {
  MONTH_MIN: 1,
  MONTH_MAX: 12,
};

export const ERROR_MESSAGE = {
  OVER_MAX_LENGTH: '입력값의 최대 길이를 초과했습니다.',
  NOT_NUMBER: '정수만 입력할 수 있습니다.',
  INVALID_MONTH_RANGE: '1 ~ 12 까지의 숫자만 입력할 수 있습니다.',
  INVALID_DATE: '만료일은 현재 이후의 날짜만 입력 가능합니다.',
};

export const STRING = {
  BLANK: ' ',
  DOT: '.',
};
