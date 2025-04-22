export const ERROR_MESSAGE = {
  cardNumber: {
    number: '카드 번호는 오로지 숫자만 입력 가능합니다.',
    length: '카드 번호는 4자리씩 입력해주세요.',
  },
  cardExpirationDate: {
    month: 'MM형식의 유효한 월을 입력해주세요.',
    year: 'YY형식의 유효한 년도를 입력해주세요.',
  },
  cardCVCNumber: {
    number: 'CVC 번호는 오로지 숫자만 입력 가능합니다.',
    length: 'CVC 번호는 3자리여야 합니다.',
  },
  cardPassword: {
    number: '비밀번호는 오로지 숫자만 입력 가능합니다.',
    length: '비밀번호는 2자리여야 합니다.',
  },
} as const;
