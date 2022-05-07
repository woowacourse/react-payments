const CARD_NUMBER = {
  UNIT_LENGTH: 4,
}

const DUE_DATE = {
  UNIT_LENGTH: 2,
}

const OWNER = {
  MAX_LENGTH: 30,
}

const CVC = {
  UNIT_LENGTH: 3,
}

const PASSWORD = {
  UNIT_LENGTH: 1,
}

const MONTH = {
  MIN: 1,
  MAX: 12,
}

const COLORS = {
  MINT: '#04C09E',
  GRAY: '#D2D2D2',
  LIGHT_GRAY: '#ecebf1',
  DARK_GRAY: '#525252',
  PINK: '#E36DB0',
  LIGHT_PINK: '#fcdfef',
}

const CARD_COMPANY = {
  포코: '#E24141',
  준: '#547CE4',
  공원: '#73BC6D',
  브랜: '#DE59B9',
  로이드: '#04C09E',
  도비: '#E76E9A',
  콜린: '#F37D3B',
  썬: '#FBCD58',
}

const ERROR_MESSAGE = {
  EXISTING_CARD_NUMBER: '이미 존재하는 카드번호입니다',
  INVALID_MONTH: `${MONTH.MIN}~${MONTH.MAX}사이의 숫자를 입력해주세요`,
  INVALID_YEAR: '현재 년도 이상의 값을 입력해주세요',
}

export {
  CARD_NUMBER,
  DUE_DATE,
  OWNER,
  CVC,
  PASSWORD,
  MONTH,
  COLORS,
  CARD_COMPANY,
  ERROR_MESSAGE,
}
