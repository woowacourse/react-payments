export const CARD_NUMBER = {
  names: ['number_1', 'number_2', 'number_3', 'number_4'],
  type: 'number',
  title: '결제할 카드 번호를 입력해 주세요',
  subtitle: '본인 명의의 카드만 결제 가능합니다.',
  label: '카드 번호',
  placeholders: ['1234', '1234', '1234', '1234'],
  maxLength: 4,
} as const;

export const CARD_ISSUER = {
  name: 'issuer',
  title: '카드사를 선택해 주세요',
  subtitle: '현재 국내 카드사만 가능합니다.',
  placeholder: '카드사를 선택해주세요',
  options: ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'],
  optionValues: ['bc', 'shinhan', 'kakao', 'hyundai', 'woori', 'lotte', 'hana', 'kookmin'],
};

export const CARD_PERIOD = {
  names: ['month', 'year'],
  type: 'period',
  title: '카드 유효기간을 입력해 주세요',
  subtitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
  label: '유효기간',
  placeholders: ['MM', 'YY'],
  maxLength: 2,
} as const;

export const CARD_OWNER = {
  names: ['owner'],
  type: 'owner',
  title: '카드 소유자 이름을 입력해 주세요',
  subtitle: '',
  label: '소유자 이름',
  placeholders: ['WOOTECO'],
  maxLength: 30,
} as const;

export const CARD_CVC = {
  names: ['cvc'],
  type: 'cvc',
  title: 'CVC 번호를 입력해 주세요',
  subtitle: '',
  label: 'CVC',
  placeholders: ['123'],
  maxLength: 3,
} as const;

export const CARD_PASSWORD = {
  names: ['password'],
  type: 'password',
  title: '비밀번호를 입력해 주세요',
  subtitle: '앞의 2자리를 입력해주세요',
  label: '비밀번호 앞 2자리',
  placeholders: ['**'],
  maxLength: 2,
} as const;
