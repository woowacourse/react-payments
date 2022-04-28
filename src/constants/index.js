const ACTION_TYPE = {
  UPDATE_CARD_NUMBER: Symbol('카드 번호를 업데이트합니다.'),
  UPDATE_EXPIRE_MONTH: Symbol('만료월을 업데이트합니다.'),
  UPDATE_EXPIRE_YEAR: Symbol('만료연도를 업데이트합니다.'),
  UPDATE_USER_NAME: Symbol('카드 소유자의 이름을 업데이트합니다.'),
  UPDATE_SECURITY_CODE: Symbol('보안코드를 업데이트합니다.'),
  UPDATE_CARD_PASSWORD: Symbol('카드 비밀번호를 업데이트합니다.'),
};

const CARD_NUMBER = {
  UNIT_COUNT: 4,
  UNIT_LENGTH: 4,
  MASKING_INDEX: 2,
};

const EXPIRE_DATE = {
  MIN_MONTH: 1,
  MAX_MONTH: 12,
  MONTH_LENGTH: 2,
  YEAR_LENGTH: 2,
  YEAR_UNIT: 2000,
};

const USER_NAME = {
  MAX_LENGTH: 30,
};

const SECURITY_CODE = {
  MAX_LENGTH: 3,
};

const CARD_PASSWORD = {
  MAX_LENGTH: 2,
};

const ERROR_MESSAGE = {
  IS_NOT_INTEGER: '숫자만 입력할 수 있습니다.',
  EXPIRE_DATE: {
    IS_NOT_VALIDATE_MONTH: '만료월을 정확히 입력해주세요.',
    IS_NOT_MONTH_LENGTH: '만료월을 2자리로 입력해주세요.',
    IS_NOT_YEAR_LENGTH: '만료연도를 2자리로 입력해주세요.',
    IS_EXPIRED: '이미 만료된 카드입니다.',
  },
  USER_NAME: {
    IS_NOT_ENGLISH_NAME: '영어와 공백만 입력할 수 있습니다.',
  },
};

export {
  ACTION_TYPE,
  CARD_NUMBER,
  EXPIRE_DATE,
  USER_NAME,
  SECURITY_CODE,
  CARD_PASSWORD,
  ERROR_MESSAGE,
};
