export const ERRORS = {
  isNotInteger: '숫자만 입력 가능합니다.',
  isNotTwoDigit: '2자리 숫자를 입력해 주세요.',
  isNotThreeDigit: '3자리 숫자를 입력해 주세요.',
  isNotFourDigit: '4자리 숫자를 입력해 주세요.',
  inValidMonth: '1에서 12사이의 숫자를 입력해 주세요.',
  deprecatedCard: '만료된 카드는 사용할 수 없습니다.',
  isNotAlphabet: '알파벳만 입력 가능합니다.',
  invalidOwnerName: '이름을 입력해 주세요.',
  invalidCardIssuer: '카드사를 입력해 주세요.',
  invalidPassword: '비밀번호를 입력해 주세요.',
} as const;

const CARD_NUMBER = {
  title: '결제할 카드 번호를 입력해 주세요',
  description: '본인 명의의 카드만 결제 가능합니다.',
  labelText: '카드 번호',

  placeholder: '1234',

  inputLabelText: {
    first: '첫 번째 네 자리',
    second: '두 번째 네 자리',
    third: '세 번째 네 자리',
    fourth: '네 번째 네 자리',
  },
} as const;

const EXPIRATION_DATE = {
  title: '카드 유효기간을 입력해 주세요',
  description: '월/년도(MMYY)를 순서대로 입력해 주세요',
  labelText: '유효기간',

  placeholder: {
    month: 'MM',
    year: 'YY',
  },

  inputLabelText: {
    month: '월',
    year: '년도',
  },
} as const;

const OWNER_NAME = {
  title: '카드 소유자 이름을 입력해 주세요',
  labelText: '소유자 이름',

  placeholder: 'JOHN DOE',

  inputLabelText: {
    ownerName: '소유자 이름',
  },
} as const;

const CARD_ISSUER = {
  title: '카드사를 선택해 주세요',
  description: '현재 국내 카드사만 가능합니다.',

  inputLabelText: { cardIssuer: '카드사' },

  defaultText: '카드사를 선택해 주세요',
  options: [
    { value: 'BC카드', text: 'BC카드' },
    { value: '신한카드', text: '신한카드' },
    { value: '카카오뱅크', text: '카카오뱅크' },
    { value: '현대카드', text: '현대카드' },
    { value: '우리카드', text: '우리카드' },
    { value: '롯데카드', text: '롯데카드' },
    { value: '하나카드', text: '하나카드' },
    { value: '국민카드', text: '국민카드' },
  ],
} as const;

const CVC = {
  title: 'CVC 번호를 입력해 주세요',
  labelText: 'CVC',

  placeholder: '123',

  inputLabelText: {
    cvc: 'cvc 번호',
  },
} as const;

const PASSWORD = {
  title: '비밀번호를 입력해 주세요',
  description: '앞의 2자리를 입력해주세요',
  labelText: '비밀번호 앞 2자리',

  placeholder: '',

  inputLabelText: {
    password: '카드 비밀번호 앞 2자리',
  },
} as const;

export const ADD_CARD_FORM_FIELDS = {
  CARD_NUMBER,
  EXPIRATION_DATE,
  OWNER_NAME,
  CARD_ISSUER,
  CVC,
  PASSWORD,
} as const;
