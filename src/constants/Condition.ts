import type { CardCompany } from '../domain/Card.type';

export const CARD_EXPIRATION = {
  INPUT_FIELD_COUNT: 2,
  MAX_LENGTH: 2,
  MIN_MONTH_RANGE: 1,
  MAX_MONTH_RANGE: 12,
} as const;

export const CARD_NUMBER = {
  INPUT_FIELD_COUNT: 4,
  MAX_LENGTH: 4,
} as const;

export const CARD_OWNER = {
  VALID_REGEX: /^[a-zA-Z][a-zA-Z ]*$/,
  INPUT_FIELD_COUNT: 1,
  MAX_LENGTH: 30,
} as const;

export const CARD_COMPANY: Record<CardCompany, string> = {
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: '#000000',
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
} as const;

export const CARD_CVC = {
  INPUT_FIELD_COUNT: 1,
  MAX_LENGTH: 3,
} as const;

export const CARD_PASSWORD = {
  INPUT_FIELD_COUNT: 1,
  MAX_LENGTH: 2,
} as const;

export const CARD = {
  VISA: 4,
  MIN_MASTER_CARD: 51,
  MAX_MASTER_CARD: 55,
} as const;
