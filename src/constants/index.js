const APP_NAME = '콤피 페이';

const CARD_COMPANY = {
  1: { name: '포코 카드', color: 'purple', icon: '👾' },
  2: { name: '준 카드', color: 'yellow', icon: '😆' },
  3: { name: '공원 카드', color: 'sky', icon: '🌳' },
  4: { name: '월터 카드', color: 'white', icon: '👻' },
  5: { name: '콤피 카드', color: 'green', icon: '🦖' },
  6: { name: '티거 카드', color: 'orange', icon: '🐯' },
  7: { name: '민초 카드', color: 'blue', icon: '🌱' },
  8: { name: '위니 카드', color: 'yellow', icon: '🧸' },
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

const MODAL_STATE = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible',
  DISAPPEAR: 'disappear',
};

const PAGE_LIST = {
  CARD_EDITOR: Symbol('카드 정보 추가/수정 페이지'),
  CARD_UPDATED: Symbol('카드 정보 업데이트 완료 페이지'),
  CARD_LIST: Symbol('등록된 카드 목록 페이지'),
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
  APP_NAME,
  CARD_COMPANY,
  CARD_NUMBER,
  EXPIRE_DATE,
  USER_NAME,
  SECURITY_CODE,
  CARD_PASSWORD,
  MODAL_STATE,
  PAGE_LIST,
  ERROR_MESSAGE,
};
