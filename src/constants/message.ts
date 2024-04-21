export const ERROR_MESSAGE = {
  cardNumber: '카드 번호는 4자리 숫자만 입력 가능합니다.',
  cardExpirationPeriod: {
    month: '월은 01에서 12 사이의 숫자여야 합니다.',
    year: '년도는 2자리 숫자로 입력해 주세요.',
    expired: '유효 기간이 만료되었습니다. 유효한 기간을 입력해 주세요.',
  },
  userName: '소유자 이름은 영문과 공백만 입력 가능합니다.',
};

export const CARD_NUMBERS_FORM_MESSAGE = {
  title: '결제할 카드 번호를 입력해 주세요',
  subTitle: '본인 명의의 카드만 결제 가능합니다.',
  label: '카드 번호',
  placeholder: '1234',
};

export const CARD_EXPIRATION_PERIOD_FORM_MESSAGE = {
  title: '카드 유효기간을 입력해 주세요',
  subTitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
  label: '유효기간',
  yearPlaceholder: 'YY',
  monthPlaceholder: 'MM',
};

export const CARD_USER_FORM_MESSAGE = {
  title: '카드 소유자 이름을 입력해 주세요',
  subTitle: '',
  label: '소유자 이름',
  namePlaceholder: '소유자 이름',
};
