import { CARD_COMPANY, MAX_LENGTH } from "../../constants/card";
import {
  CardCompanyState,
  CardNumberState,
  ExpirationPeriodState,
} from "../../types/card";
import { hasExactLength } from "./common";

export const isCardNumberFilled = (cardNumber: CardNumberState): boolean => {
  return Object.values(cardNumber).every((segment: string) =>
    hasExactLength(segment, MAX_LENGTH.cardNumber)
  );
};

export const isCardCompanySelected = (
  cardCompany: CardCompanyState
): boolean => {
  return cardCompany !== CARD_COMPANY.none;
};

export const isExpirationPeriodFilled = (
  expirationPeriod: ExpirationPeriodState
): boolean => {
  return Object.values(expirationPeriod).every((segment: string) =>
    hasExactLength(segment, MAX_LENGTH.expirationPeriod)
  );
};

export const isCvcNumberFilled = (value: string): boolean => {
  return hasExactLength(value, MAX_LENGTH.cvcNumber);
};

export const isPasswordFilled = (value: string): boolean => {
  return hasExactLength(value, MAX_LENGTH.password);
};
