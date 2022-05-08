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

export const CARD_COMPANY_LIST = [
  { id: 1, company: '안 카드', theme: 'blue' },
  { id: 2, company: '돔하디 카드', theme: 'red' },
  { id: 3, company: '마르코 카드', theme: 'green' },
  { id: 4, company: '록바 카드', theme: 'hot-pink' },
  { id: 5, company: '민초 카드', theme: 'mint' },
  { id: 6, company: '후이 카드', theme: 'pink' },
  { id: 7, company: '무비 카드', theme: 'orange' },
  { id: 8, company: '소피아 카드', theme: 'yellow' },
];

export const ERROR_MESSAGE = {
  OVER_MAX_LENGTH: '입력값의 최대 길이를 초과했습니다.',
  NOT_NUMBER: '숫자만 입력할 수 있습니다.',
  INVALID_MONTH_RANGE: '1 ~ 12 까지의 숫자만 입력할 수 있습니다.',
};
