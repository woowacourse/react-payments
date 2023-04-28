export const LABEL: { [key: string]: string } = {
  card_number: '카드 번호',
  expired_date: '만료일',
  username: '카드 소유자 이름(선택)',
  code: '보안 코드(CVC/CVV)',
  password: '카드 비밀번호',
} as const;

export const PLACEHOLDER: { [key: string]: string } = {
  card_number: '',
  month: 'MM',
  year: 'YY',
  username: '카드에 표시된 이름과 동일하게 입력하세요.',
  code: '',
  password: '',
} as const;

export const MAX_LENGTH: { [key: string]: number } = {
  card_number: 4,
  expired_date: 2,
  username: 30,
  code: 3,
  password: 1,
} as const;

export const SIZE_STYLE: { [key: string]: number } = {
  card_number: 8,
  expired_date: 7,
  username: 50,
  code: 5,
  password: 1,
} as const;
