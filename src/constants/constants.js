/* eslint-disable import/no-anonymous-default-export */
export const INPUT_TYPE = {
  CARD_NUMBERS: {
    type: 'cardNumbers',
    label: '카드 번호',
    width: '318px',
  },
  EXPIRATION_DATE: {
    type: 'expirationDate',
    label: '만료일',
    width: '137px',
  },
  OWNER_NAME: {
    type: 'ownerName',
    label: '카드 소유자 이름(선택)',
    width: '318px',
  },
  SECURE_CODE: {
    type: 'secureCode',
    label: '보안코드(CVC/CVV)',
    width: '84px',
  },
  PASSWORD: {
    type: 'password',
    label: '카드 비밀번호',
    width: '100%',
  },
};

export const FRAGMENT_INDEX = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
};

export const DATE_TYPE = {
  MONTH: 'month',
  YEAR: 'year',
};
