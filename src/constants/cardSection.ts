const NUMBER_ERROR_MESSAGE = '숫자만 입력 가능합니다.';

export const CARD_NUMBER = Object.freeze({
  title: '결제할 카드 번호를 입력해 주세요',
  description: '본인 명의의 카드만 결제 가능합니다.',
  inputTitle: '카드 번호',
  errorMessage: NUMBER_ERROR_MESSAGE,
});

export const EXPIRATION_PERIOD = Object.freeze({
  title: '카드 유효기간을 입력해 주세요',
  description: '월/년도(MMYY)를 순서대로 입력해 주세요.',
  inputTitle: '유효기간',
  monthErrorMessage: '1부터 12사이의 숫자만 입력 가능합니다.',
  yearErrorMessage: NUMBER_ERROR_MESSAGE,
});

export const OWNER_NAME = Object.freeze({
  title: '카드 소유자 이름을 입력해주세요',
  inputTitle: '소유자 이름',
  errorMessage: '영문 대문자만 입력 가능합니다.',
});
