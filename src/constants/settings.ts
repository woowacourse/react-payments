export const CARD_NUMBER = {
  FIELDS_COUNT: 4,
  MAX_LENGTH: 4,
  PLACEHOLDER: '1234',
};

export const EXPIRATION_DATE = {
  FIELDS_COUNT: 2,
  MAX_LENGTH: 2,
  PLACEHOLDER: ['MM', 'YY'],
};

export const CVC = {
  FIELDS_COUNT: 1,
  MAX_LENGTH: 3,
  PLACEHOLDER: '123',
};

export const CARD_PREFIX = {
  VISA: 4,
  MASTERCARD_MIN: 51,
  MASTERCARD_MAX: 55,
};

export const PASSWORD = {
  FIELDS_COUNT: 1,
  MAX_LENGTH: 2,
};

export const CARD_COMPANY = [
  'BC카드',
  '신한카드',
  '삼성카드',
  '현대카드',
  '롯데카드',
  '우리카드',
  '하나카드',
  'NH농협카드',
];

export const CARD_COMPANY_PLACEHOLDER = '카드사를 선택해주세요';

export const CARD_COLOR: { [key: string]: string } = {
  '': '#000000',
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
};
