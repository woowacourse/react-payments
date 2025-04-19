export const CARD_NUMBER_MESSAGE = {
  MAIN: '결제할 카드 번호를 입력해 주세요',
  CAPTION: '본인 명의의 카드만 결제 가능합니다.',
};

export const EXPIRATION_MESSAGE = {
  MAIN: '카드 유효기간을 입력해 주세요',
  CAPTION: '월/년도(MMYY)를 순서대로 입력해 주세요.',
};

export const CVC_MESSAGE = {
  MAIN: 'CVC 번호를 입력해 주세요',
};

export const ERROR_MESSAGE = {
  GET_LENGTH_TEXT: (length: number) => `${length}자의 숫자만 입력 가능합니다.`,
  INVALID_MONTH: '01에서 12사이의 숫자를 입력해주세요.',
  INVALID_YEAR: '만료된 연도입니다. 25년 이후의 년도를 입력해주세요.',
};
