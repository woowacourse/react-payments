const PATH = {
  JSON_SERVER_BASE_URL: 'https://tigers-react-payments.herokuapp.com',
  CARD_LIST: '/react-payments/',
  CARD_ADD: '/react-payments/card-add',
  CARD_ADD_COMPLETE: '/react-payments/card-add-complete',
};

const CARD_NUMBER = {
  TEXT_FIELD_NAME: 'cardNumber',
  UNIT_COUNT: 4,
  UNIT_LENGTH: 4,
  MASKING_INDEX: 2,
};

const EXPIRE_DATE = {
  MONTH: {
    TEXT_FIELD_NAME: 'expireMonth',
    MIN: 1,
    MAX: 12,
    LENGTH: 2,
  },
  YEAR: {
    TEXT_FIELD_NAME: 'expireYear',
    LENGTH: 2,
    UNIT: 2000,
  },
};

const USER_NAME = {
  TEXT_FIELD_NAME: 'userName',
  MAX_LENGTH: 30,
};

const SECURITY_CODE = {
  TEXT_FIELD_NAME: 'securityCode',
  LENGTH: 3,
};

const CARD_PASSWORD = {
  TEXT_FIELD_NAME: 'cardPassword',
  LENGTH: 2,
};

const ERROR_MESSAGE = {
  REQUEST: {
    FAIL_TO_GET_CARDS: '보유 카드를 불러올 수 없습니다. 관리자에게 문의하십시오.',
  },
  IS_NOT_VALID_CARD: '카드 정보가 올바르지 않습니다.\n입력한 내용을 확인해주세요.',
  CARD_NUMBER: {
    IS_NOT_LENGTH: `카드번호를 ${
      CARD_NUMBER.UNIT_COUNT * CARD_NUMBER.UNIT_LENGTH
    }자리로 입력해주세요.`,
  },
  EXPIRE_DATE: {
    IS_NOT_INTEGER: '만료일은 숫자로만 입력할 수 있습니다.',
    IS_NOT_VALIDATE_MONTH: '만료월을 정확히 입력해주세요.',
    IS_NOT_MONTH_LENGTH: `만료월을 ${EXPIRE_DATE.MONTH.LENGTH}자리로 입력해주세요.`,
    IS_NOT_YEAR_LENGTH: `만료연도를 ${EXPIRE_DATE.YEAR.LENGTH}자리로 입력해주세요.`,
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

export { PATH, CARD_NUMBER, EXPIRE_DATE, USER_NAME, SECURITY_CODE, CARD_PASSWORD, ERROR_MESSAGE };
