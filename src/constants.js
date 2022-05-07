const ERROR_MESSAGE = {
  CARD_NUMBER: '카드번호가 잘못 입력되었습니다. 카드번호는 16자리로 입력해주세요.',
  MONTH: '만료월이 잘못 입력되었습니다. 만료월은 1월 ~ 12월으로 입력해주세요.',
  YEAR: '만료년도가 잘못 입력되었습니다. 만료년도는 현재년도 이후로 입력해주세요.',
  MONTH_AND_YEAR: '만료일이 잘못 입력되었습니다. 만료일은 현재 날짜 이후로 입력해주세요.',
  CVC: '보안코드가 잘못 입력되었습니다. 보안코드는 3자리로 입력해주세요.',
};

const MONTH = {
  JANUARY: 1,
  DECEMBER: 12,
  FEBRUARY: 2,
  SEPTEMBER: 9,
  LEADING_ZERO: '0',
};

const LIMIT_LENGTH = {
  EXPIRATION_DATE: 2,
  CARD_NUMBER: 4,
  CARD_OWNER: 30,
  CARD_PASSWORD: 1,
  CVC: 3,
};

const PAGE = {
  LIST: 'listPage',
  ADD: 'addPage',
  ADD_SUCCESS: 'addSuccessPage',
};

const CVC_DESCRIPTION = '카드 뒷면에 있는 3자리 숫자를 입력해주세요.';

export { ERROR_MESSAGE, MONTH, LIMIT_LENGTH, CVC_DESCRIPTION, PAGE };
