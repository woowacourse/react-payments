import cardInputValidator from "./cardInputValidator";

import {
  CVCNumberKeys,
  CardCompanyKeys,
  CardNumberKeys,
  CardOwnerKeys,
  CardPasswordKeys,
  ExpirationDateKeys,
} from "../types/card";

type CardNumbers = {
  [key in CardNumberKeys]: string;
};

type CardCompany = {
  [key in CardCompanyKeys]: string;
};

type ExpirationDate = {
  [key in ExpirationDateKeys]: string;
};

type CardOwner = {
  [key in CardOwnerKeys]: string;
};

type CVCNumber = {
  [key in CVCNumberKeys]: string;
};

type CardPassword = {
  [key in CardPasswordKeys]: string;
};

export const validateCardNumbersInputCompleted = (cardNumbers: CardNumbers) => {
  return Object.values(cardNumbers).every(
    (cardNumber) => cardNumber.length === 4
  );
};

export const validateCardCompanySelectCompleted = ({
  cardCompany,
}: CardCompany) => {
  return cardCompany !== "기본카드";
};

export const validateExpirationDateInputCompleted = (
  expirationDate: ExpirationDate
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

export const validateCardOwnerInputCompleted = ({ ownerName }: CardOwner) => {
  return ownerName.length >= 1;
};

export const validateCVCNumberInputCompleted = ({ cvcNumber }: CVCNumber) => {
  return cvcNumber.length === 3;
};

export const validateCardPasswordInputCompleted = ({
  cardPassword,
}: CardPassword) => {
  return cardPassword.length === 2;
};
