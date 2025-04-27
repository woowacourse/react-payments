import { CardNumbersSegmentType, ExpirationPeriodSegmentType } from "./card";

export type ErrorMessage = string | null;
interface CommonErrorState {
  errorMessage: ErrorMessage;
  hasError: boolean;
}

export interface CardNumberErrorState {
  errorMessage: ErrorMessage;
  hasError: Record<CardNumbersSegmentType, boolean>;
}
export interface ExpirationPeriodErrorState {
  errorMessage: ErrorMessage;
  hasError: Record<ExpirationPeriodSegmentType, boolean>;
}

export type CvcNumberErrorState = CommonErrorState;
export type CardCompanyErrorState = CommonErrorState;
export type PasswordErrorState = CommonErrorState;
