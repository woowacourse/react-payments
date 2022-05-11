export const INPUT_TYPE = {
  BACKWARD: 'deleteContentBackward',
};

export const DATE_INPUT_PLACEHOLDER = { month: 'MM', year: 'YY' };

export const PLACEHOLDER = {
  NAME: 'NAME',
  DATE: `${DATE_INPUT_PLACEHOLDER.month}/${DATE_INPUT_PLACEHOLDER.year}`,
};

export const INPUT_TITLE = {
  CARD_NUMBER: '카드 번호',
  OWNER_NAME: '카드 소유자 이름(선택)',
  EXPIRED_DATE: '만료일',
  PASSWORD: '카드 비밀번호',
  SECURITY_NUMBER: '보안 코드(CVC/CVV)',
};

export const INPUT_PLACEHOLDER = {
  OWNER_NAME: '카드에 표시된 이름과 동일하게 입력하세요.',
  CARD_NAME: '카드 이름을 입력해주세요.',
};

export const COUNT = {
  PASSWORD_DISABLE_COUNT: 2,
  PASSWORD_MAX_LENGTH: 1,
  CARD_NUMBER_HIDE_COUNT: 2,
  CARD_NUMBER_MAX_COUNT: 4,
  DATE_MAX_COUNT: 2,
  MAX_MONTH: 12,
  OWNER_NAME_MAX_COUNT: 30,
  SECURITY_NUMBER_MAX_LENGTH: 3,
  CARD_NAME_MAX_LENGTH: 20,
};

export const NO_CARD_NAME = '이름 없음';
