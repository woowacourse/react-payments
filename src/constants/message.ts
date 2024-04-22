export const PAYMENTS_MESSAGE = {
  expiredDateTitle: '카드 유효기간을 입력해주세요',
  expiredDateDescription: '월/년도(MMYY)를 순서대로 입력해 주세요.',

  cardNumbersTitle: '결제할 카드 번호를 입력해 주세요',
  cardNumberDescription: '본인 명의의 카드만 결제 가능합니다.',

  cardHolderTitle: '카드 소유자 이름을 입력해 주세요',
};

export const PAYMENTS_INPUT_MESSAGE = {
  cardNumberLabel: '카드 번호',
  cardNumberPlaceHolder: '1234',

  expiredDateLabel: '유효기간',
  expiredDatePlaceHolder: ['MM', 'YY'],
  expiredDateMonthPlaceHolder: 'MM',
  expiredDateYearPlaceHolder: 'YY',

  cardHolderLabel: '소유자 이름',
  cardHolderPlaceHolder: 'SEUNGHA CHA',
};

export const ERROR_MESSAGE = {
  notDigit: '올바른 숫자(0~9)를 입력해주세요',
  invalidLengthTail: '자리를 입력해주세요',
  notEnglishOrSpace: '영어로 입력해주세요',
  wrongMonth: '올바른 월(01~12)를 입력해주세요',
  wrongYear: '올바른 년도(00~99)를 입력해주세요',
  wrongExpiredDate: `만료된 유효기간입니다. ${new Date().getMonth().toString().padStart(2, '00')}/${new Date().getUTCFullYear() - 2000} 이전의 유효기간을 입력할 수 없습니다.`,
};
