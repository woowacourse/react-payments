export const CARD = {
  NUMBER_LENGTH: 4,
  DATE: {
    LENGTH: 2,
    RANGE: {
      MIN: 1,
      MAX: 12,
    },
  },
  NAME_LENGTH: 30,
  SECURITY_CODE_LENGTH: 3,
  PASSWORD_LENGTH: 1,
};

export const ERROR_MESSAGE = {
  OVER_MAX_LENGTH: '입력값의 최대 길이를 초과했습니다.',
  NOT_NUMBER: '숫자만 입력할 수 있습니다.',
  INVALID_MONTH_RANGE: '1 ~ 12 까지의 숫자만 입력할 수 있습니다.',
};
