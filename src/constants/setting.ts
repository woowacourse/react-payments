export const CARD_FORM_INPUTS = {
  CARD_NUMBERS: {
    LABEL: '카드 번호',
    MAIN_TEXT: '결제할 카드 번호를 입력해 주세요',
    SUB_TEXT: '본인 명의의 카드만 결제 가능합니다.',
    PLACEHOLDER: '1234',
    MAX_LENGTH: 4,
  },
  CARD_COMPANY: {
    LABEL: '카드사',
    MAIN_TEXT: '카드사를 선택해 주세요',
    SUB_TEXT: '현재 국내 카드사만 가능합니다.',
    OPTIONS: [
      '카드사를 선택해 주세요',
      'BC카드',
      '신한카드',
      '카카오뱅크',
      '현대카드',
      '우리카드',
      '롯데카드',
      '하나카드',
      '국민카드',
    ],
  },
  CARD_EXPIRATION: {
    LABEL: '유효 기간',
    MAIN_TEXT: '카드 유효기간을 입력해 주세요',
    SUB_TEXT: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    PLACEHOLDER: { MONTH: 'MM', YEAR: 'YY' },
    MAX_LENGTH: 2,
    MONTH_MAX_NUMBER: 12,
    MONTH_MIN_NUMBER: 1,
  },
  USER_NAME: {
    LABEL: '소유자 이름',
    MAIN_TEXT: '카드 소유자 이름을 입력해 주세요',
    SUB_TEXT: '',
    PLACEHOLDER: 'SUNDAY',
    MAX_LENGTH: 21,
    REGEX: /^[a-zA-Z\s]+$/,
  },
  CVC: {
    LABEL: 'CVC',
    MAIN_TEXT: 'CVC 번호를 입력해 주세요',
    SUB_TEXT: '',
    PLACEHOLDER: '123',
    MAX_LENGTH: 3,
  },
  PASSWORD: {
    LABEL: '비밀번호 앞 2자리',
    MAIN_TEXT: '비밀번호를 입력해 주세요',
    SUB_TEXT: '앞의 2자리를 입력해주세요',
    PLACEHOLDER: '**',
    MAX_LENGTH: 2,
  },
};

export const CARD_NUMBERS_MASKING = '•';

export const CARD_BRAND = {
  MASTERCARD: {
    NAME: 'MasterCard',
    MIN_NUMBER: 51,
    MAX_NUMBER: 55,
  },
  VISA: {
    NAME: 'Visa',
    MIN_NUMBER: 40,
    MAX_NUMBER: 49,
  },
};
