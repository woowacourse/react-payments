export const TOOLTIP_TYPES = {
  PRIVACY_CODE: `보안 코드는 온라인으로 카드를 사용할 경우 신용카드 보안을 위한 추가 수단을 제공합니다.`,
};

export const CRYPTO_STRING = '•';

export const DEFAULT_CARD_INFO = {
  OWNER_NAME: 'NAME',
  EXPIRY_MONTH: 'MM',
  EXPIRY_YEAR: 'YY',
};

export const THEME = {
  RED: 'red',
  BLUE: 'blue',
  GREEN: 'green',
  HOT_PINK: 'hot-pink',
  MINT: 'mint',
  PINK: 'pink',
  ORANGE: 'orange',
  YELLOW: 'yellow',
};

export const COMPANY = {
  VALLISTA: '발리스타 카드',
  YULIE: '율리 카드',
  ASA: '아사 카드',
  ROY: '로이 카드',
  AUSTIN: '오스틴 카드',
  YB: 'YB 카드',
  NOS: '노스 카드',
  WALTER: '월터 카드',
};

export const INPUT_MAX_LENGTH = {
  NUMBER: 4,
  EXPIRY_DATE: 2,
  OWNER_NAME: 30,
  PRIVACY_CODE: 3,
  PASSWORD: 1,
  ALIAS: 15,
};

export const INPUT_MIN_LENGTH = {
  ALIAS: 2,
};

export const DATE_RANGE = {
  MIN_MONTH: 1,
  MAX_MONTH: 12,
  MIN_YEAR: 22,
};

export const ACTION = {
  SET_ALIAS: 'SET_ALIAS',
  CREATE_CARD: 'CREATE_CARD',
};

export const BASENAME = '/react-payments/';

export const ROUTE = {
  MAIN: '/',
  ADD: '/add',
  CONFIRM: '/confirm/',
  NO_MATCHED: '/*',
};

export const ERROR_MESSAGE = {
  DUPLICATED_NAME: '중복되는 카드 이름이 존재합니다.',
};
