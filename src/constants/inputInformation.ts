export const CARD_NUMBER = {
  names: ['number_1', 'number_2', 'number_3', 'number_4'],
  type: 'number',
  title: '결제할 카드 번호를 입력해 주세요',
  subtitle: '본인 명의의 카드만 결제 가능합니다.',
  label: '카드 번호',
  placeholders: ['1234', '1234', '1234', '1234'],
  maxLength: 4,
} as const;

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
