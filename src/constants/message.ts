export const ERROR_MESSAGE = {
  cardNumber: '카드 번호는 4자리 숫자만 입력 가능합니다.',
  cardExpirationPeriod: {
    month: '월은 01에서 12 사이의 숫자여야 합니다.',
    year: '년도는 2자리 숫자로 입력해 주세요.',
    expired: '유효 기간이 만료되었습니다. 유효한 기간을 입력해 주세요.',
  },
  userName: '소유자 이름은 영문과 공백만 입력 가능합니다.',
  cardCompany: '카드사를 선택해 주세요.',
  CVCNumber: 'CVC 번호는 3자리 숫자만 입력 가능합니다.',
  password: '비밀번호는 2자리 숫자만 입력 가능합니다.',
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
  subTitle: '이름 입력이 완료되면 엔터를 눌러주세요.',
  label: '소유자 이름',
  placeholder: '소유자 이름',
};

export const CARD_COMPANY_FORM_MESSAGE = {
  title: '카드사를 선택해 주세요',
  subTitle: '현재 국내 카드사만 가능합니다.',
  label: '',
  placeholder: '카드사를 선택해주세요',
  options: [
    'BC카드',
    '신한카드',
    '카카오뱅크',
    '현대카드',
    '우리카드',
    '롯데카드',
    '하나카드',
    '국민카드',
  ],
};

export const CARD_CVC_FORM_MESSAGE = {
  title: 'CVC 번호를 입력해 주세요',
  subTitle: '',
  label: 'CVC',
  placeholder: '123',
};

export const CARD_PASSWORD_FORM_MESSAGE = {
  title: '비밀번호를 입력해 주세요',
  subTitle: '앞의 2자리를 입력해주세요',
  label: '비밀번호 앞 2자리',
  placeholder: '**',
};
