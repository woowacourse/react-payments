import cardInputValidator from "./cardInputValidator";

import {
  CardNumberKeys,
  CardOwnerKeys,
  ExpirationDateKeys,
} from "../types/card";
import { CardCompany, INPUT_RULES } from "../constants/card-app";

export const validateCardNumbersInputCompleted = (
  cardNumbers: Record<CardNumberKeys, string>
) => {
  return Object.values(cardNumbers).every((cardNumber) =>
    cardInputValidator.validateCardNumberLength(cardNumber)
  );
};

export const validateCardCompanySelectCompleted = (
  cardCompany: CardCompany
) => {
  return cardCompany !== "기본카드";
};

export const validateExpirationDateInputCompleted = (
  expirationDate: Record<ExpirationDateKeys, string>
) => {
  const { mm, yy } = expirationDate;

  if (mm.length !== 2 || yy.length !== 2) return false;

  if (!cardInputValidator.validateNumberInRange(parseInt(mm, 10), 1, 12))
    return false;

  if (!cardInputValidator.validatePastYear(yy)) return false;

  if (
    !cardInputValidator.validateFutureDate(parseInt(mm, 10), parseInt(yy, 10))
  )
    return false;

  return true;
};

export const validateCardOwnerInputCompleted = ({
  ownerName,
}: Record<CardOwnerKeys, string>) => {
  return ownerName.length >= INPUT_RULES.minCardOwnerNameLength;
};

export const validateCVCNumberInputCompleted = (cvcNumber: string) => {
  return cvcNumber.length === INPUT_RULES.validCVCNumberLength;
};

export const validateCardPasswordInputCompleted = (cardPassword: string) => {
  return cardPassword.length === INPUT_RULES.validCardPasswordNumberLength;
};
