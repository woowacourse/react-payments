import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from '../constants/inputInformation';

export type CardDetailType = typeof CARD_NUMBER | typeof CARD_PERIOD | typeof CARD_OWNER;
export type SectionType = typeof CARD_NUMBER.type | typeof CARD_PERIOD.type | typeof CARD_OWNER.type;

export const cardBrand = {
  visa: 'visa',
  masterCard: 'masterCard',
  noneImage: 'noneImage',
} as const;

type Union<T> = T[keyof T];

export type CardBrandType = Union<typeof cardBrand>;
export const period = ['month', 'year'] as const;
export type PeriodType = typeof period;

export type DetailSectionType = 'number' | 'owner' | 'month' | 'year';
