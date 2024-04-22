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

export type DetailSectionType = 'number' | 'owner' | 'month' | 'year';

export type CardNumberType = {
  number_1: string;
  number_2: string;
  number_3: string;
  number_4: string;
};

export type PeriodType = {
  month: string;
  year: string;
};

export type OwnerType = {
  owner: string;
};

export type AllCardType = CardNumberType | PeriodType | OwnerType;

export type Validation = (value: string) => void;

// 각 타입의 키값을 유니온 타입으로 추출
export type CardNumberKeys = keyof CardNumberType;
export type PeriodKeys = keyof PeriodType;
export type OwnerKeys = keyof OwnerType;

// 추출한 키값들을 사용하여 새로운 타입 정의
export type AllKeysType = CardNumberKeys | PeriodKeys | OwnerKeys;
export type CardNumberErrorType = {
  [P in keyof CardNumberType]?: string;
};

export type PeriodErrorType = {
  [P in keyof PeriodType]?: string;
};

export type OwnerErrorType = {
  [P in keyof OwnerType]?: string;
};
export type ErrorCardType = CardNumberErrorType | PeriodErrorType | OwnerErrorType;
