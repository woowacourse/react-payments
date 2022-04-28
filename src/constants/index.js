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
  LENGTH: 3,
};

const CARD_PASSWORD = {
  LENGTH: 2,
};

const ERROR_MESSAGE = {
  IS_NOT_VALID_CARD: '카드 정보가 올바르지 않습니다.\n입력한 내용을 확인해주세요.',
  CARD_NUMBER: {
    IS_NOT_LENGTH: `카드번호를 ${
      CARD_NUMBER.UNIT_COUNT * CARD_NUMBER.UNIT_LENGTH
    }자리로 입력해주세요.`,
  },
  EXPIRE_DATE: {
    IS_NOT_INTEGER: '만료일은 숫자로만 입력할 수 있습니다.',
    IS_NOT_VALIDATE_MONTH: '만료월을 정확히 입력해주세요.',
    IS_NOT_MONTH_LENGTH: `만료월을 ${EXPIRE_DATE.MONTH_LENGTH}자리로 입력해주세요.`,
    IS_NOT_YEAR_LENGTH: `만료연도를 ${EXPIRE_DATE.YEAR_LENGTH}자리로 입력해주세요.`,
    IS_EXPIRED: '이미 만료된 카드입니다.',
  },
  USER_NAME: {
    IS_NOT_ENGLISH_NAME: '영어와 공백만 입력할 수 있습니다.',
  },
  SECURITY_CODE: {
    IS_NOT_INTEGER: '보안 코드는 숫자로만 입력할 수 있습니다.',
    IS_NOT_LENGTH: `보안 코드를 ${SECURITY_CODE.LENGTH}자리로 입력해주세요.`,
  },
  CARD_PASSWORD: {
    IS_NOT_INTEGER: '비밀번호는 숫자로만 입력할 수 있습니다.',
    IS_NOT_LENGTH: `비밀번호 앞 ${CARD_PASSWORD.LENGTH}자리를 입력해주세요.`,
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
