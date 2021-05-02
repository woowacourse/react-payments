const COLOR = {
  DEFAULT: '#d2d2d2',
  DEFAULT_BG: '#ECEBF1',
  DEFAULT_DARK: '#575757',
  RED: '#E24141',
  BLUE: '#547cE4',
  GREEN: '#73bc6D',
  HOT_PINK: '#DE59B9',
  PINK: '#E76E9A',
  ORANGE: '#F37D3B',
  YELLOW: '#FBCD58',

  MINT: '#04c09e',
  WHITE: '#FFFFFF',
};

const CARD = {
  포코: COLOR.RED,
  준: COLOR.BLUE,
  공원: COLOR.GREEN,
  브랜: COLOR.HOT_PINK,
  로이드: COLOR.MINT,
  도비: COLOR.PINK,
  콜린: COLOR.ORANGE,
  썬: COLOR.YELLOW,
};

const ERROR_MESSAGE = {
  CHOOSE_CARD: '카드 종류를 선택해주세요!',
  ONLY_POSITIVE_NUMBER: '숫자만 입력가능합니다.',
  IS_NUMBER: '숫자는 입력이 불가능합니다.',
  MAXIMUM_CARD_NUMBER: '최대 4자리 정수만 입력가능합니다.',
  MAXIMUM_EXPIRE_DATE: '최대 2자리 정수만 입력가능합니다.',
  MAXIMUM_PASSWORD: '최대 1자리 정수만 입력가능합니다.',
  MAXIMUM_USER: '최대 30자리까지만 입력 가능합니다.',
  MAXIMUM_CVC: '최대 3자리 정수만 입력가능합니다.',
};

const SUCCESS_MESSAGE = {
  NEW_CARD_REGISTER: '새 카드가 등록되었습니다.',
};

const INPUT = {
  NAME: {
    CARD: {
      NUMBERS: 'numbers',
      EXPIRE_DATE: 'expireDate',
      USER: 'user',
      CVC: 'cvc',
      PASSWORD: 'password',
    },
  },
  MAX_LENGTH: {
    CARD: {
      NUMBERS: 4,
      EXPIRE_DATE: 2,
      USER: 30,
      CVC: 3,
      PASSWORD: 1,
    },
  },
};

const FONT_WEIGHT = {
  LIGHT: '400',
  NORMAL: '500',
  BOLD: '700',
};

const FONT_SIZE = {
  MINI: '0.75rem',
  SMALL: '0.875rem',
  NORMAL: '1rem',
  LARGE: '1.125rem',
  XLARGE: '1.3rem',
  XLLARGE: '2rem',
  XXLARGE: '2.5rem',
};

const PAGE = {
  ADD_CARD: 'addCard',
  CARD_COMPLETE: 'cardComplete',
};

const MODAL = {
  CARD_COLOR: 'cardColor',
  CVC_HELP: 'cvcHelp',
};

export {
  CARD,
  FONT_SIZE,
  FONT_WEIGHT,
  COLOR,
  PAGE,
  MODAL,
  INPUT,
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
};
