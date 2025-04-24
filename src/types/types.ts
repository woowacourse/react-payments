import {
  CARD_COMPANY,
  CARD_FORM_TYPE,
  CARD_NUMBERS_SEGMENT,
  CARD_TYPE,
  EXPIRATION_PERIOD_SEGMENT,
} from "../constants/constants";

export type CardFormType = keyof typeof CARD_FORM_TYPE;
export type CardType = keyof typeof CARD_TYPE;
export type CardNumbersSegmentType = keyof typeof CARD_NUMBERS_SEGMENT;
export type ExpirationPeriodSegmentType =
  keyof typeof EXPIRATION_PERIOD_SEGMENT;

export type CardNumbersState = Record<CardNumbersSegmentType, string>;
export type ExpirationPeriodState = Record<ExpirationPeriodSegmentType, string>;
export type CvcNumberState = string;
export type CardCompanyState = (typeof CARD_COMPANY)[keyof typeof CARD_COMPANY];
export type PasswordState = string;

export type ErrorMessage = string | null;
interface CommonErrorState {
  errorMessage: ErrorMessage;
  hasError: boolean;
}

export interface CardNumberErrorsState {
  errorMessage: ErrorMessage;
  hasError: Record<CardNumbersSegmentType, boolean>;
}
export interface ExpirationPeriodErrorsState {
  errorMessage: ErrorMessage;
  hasError: Record<ExpirationPeriodSegmentType, boolean>;
}

export type CvcNumberErrorState = CommonErrorState;
export type CardCompanyErrorState = CommonErrorState;
export type PasswordErrorState = CommonErrorState;
