export const VISA_CARD_CONDITIONS = ['4'];
export const MASTER_CARD_CONDITIONS = ['51', '52', '53', '54', '55'];
export const MASKING = '·';

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
    length: 'CVC 번호는 3자리만 입력해주세요.',
  },
} as const;
