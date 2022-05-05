export const PATH = {
  MODIFY: 'modify',
  ADD: 'add',
};

export const PASS = 'pass';
export const FAIL = 'fail';
export const STEP1 = 'step1';
export const STEP2 = 'step2';

export const COMPANY = 'company';
export const CARD_NUMBER = 'cardNumber';
export const EXPIRY_DATE = 'expiryDate';
export const PRIVACY_CODE = 'privacyCode';
export const PASSWORD = 'password';
export const CARD_ALIAS = 'cardAlias';

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

export const COMPANY_LIST = {
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
  CARD_NUMBER: 4,
  EXPIRY_DATE: 2,
  OWNER_NAME: 30,
  PRIVACY_CODE: 3,
  PASSWORD: 1,
};

export const DATE_RANGE = {
  MIN_MONTH: 1,
  MAX_MONTH: 12,
  MIN_YEAR: 22,
};

export const TOOLTIP_TYPES = {
  PRIVACY_CODE: `보안 코드는 온라인으로 카드를 사용할 경우 신용카드 보안을 위한 추가 수단을 제공합니다.`,
};

export const CARD_BACK_MESSAGE = '이 카드를 도난 분실하면 일주일 이내로 연락 주시기 바랍니다.';
export const CONFIRM_MESSAGE = '해당 카드를 카드 목록에서 삭제하시겠습니까?';

export const GUIDE_MESSAGE = {
  company: { [PASS]: '카드사가 입력되었습니다.', [FAIL]: '카드사를 입력해주세요.' },
  cardNumber: { [PASS]: '카드 번호가 입력되었습니다.', [FAIL]: '카드 번호를 입력해주세요.' },
  expiryDate: { [PASS]: '만료일이 입력되었습니다.', [FAIL]: '만료일을 입력해주세요.' },
  privacyCode: { [PASS]: '보안코드가 입력되었습니다.', [FAIL]: '보안코드를 입력해주세요.' },
  password: { [PASS]: '카드 비밀번호가 입력되었습니다.', [FAIL]: '카드 비밀번호를 입력해주세요.' },
  cardAlias: { [PASS]: '카드의 별칭이 입력되었습니다.', [FAIL]: '카드의 별칭을 입력해주세요.' },
};
