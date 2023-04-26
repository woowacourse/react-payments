export const LABEL: { [key: string]: string } = {
  CARD_NUMBER: '카드 번호',
  DATE: '만료일',
  USERNAME: '카드 소유자 이름(선택)',
  CODE: '보안 코드(CVC/CVV)',
  CARD_PASSWORD: '카드 비밀번호',
} as const;

export const PLACEHOLDER: { [key: string]: string } = {
  CARD_NUMBER: '',
  MONTH: 'MM',
  YEAR: 'YY',
  USERNAME: '카드에 표시된 이름과 동일하게 입력하세요.',
  CODE: '',
  CARD_PASSWORD: '',
} as const;

export const MAX_LENGTH: { [key: string]: number } = {
  CARD_NUMBER: 4,
  DATE: 2,
  USERNAME: 30,
  CODE: 3,
  CARD_PASSWORD: 1,
} as const;

export const SIZE_STYLE: { [key: string]: number } = {
  CARD_NUMBER: 8,
  DATE: 7,
  USERNAME: 50,
  CODE: 5,
  CARD_PASSWORD: 1,
} as const;
