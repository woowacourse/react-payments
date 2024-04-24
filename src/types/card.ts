import { CARD_CVC, CARD_NUMBER, CARD_OWNER, CARD_PERIOD, CARD_PROVIDER, PERIOD } from '../constants/inputInformation';

export type CardDetailType = typeof CARD_NUMBER | typeof CARD_PERIOD | typeof CARD_OWNER;
export type informationSectionType =
  | typeof CARD_NUMBER.type
  | typeof CARD_PERIOD.type
  | typeof CARD_OWNER.type
  | typeof CARD_PROVIDER.type
  | typeof CARD_CVC.type;

export type InformationDetailType = 'number' | 'owner' | 'month' | 'year' | 'provider' | 'cvc';

export const cardBrand = {
  visa: 'visa',
  masterCard: 'masterCard',
  domesticCard: 'domesticCard',
} as const;

type Union<T> = T[keyof T];

export type CardBrandType = Union<typeof cardBrand>;
export type PeriodType = typeof PERIOD;

export interface InputChangePropsType {
  value: string;
  index: number;
  inputSection?: InformationDetailType;
}
