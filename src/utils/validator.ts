import type { CardNumberUnits } from "@/components/CardRegister/CardNumberInputField/CardNumberInputField";
import { detectCardBrand, getCardNumberFormat } from "./card";
import type { CardCompany } from "@/constants/cardCompanies";
import type { ValidityPeriod } from "@/components/CardRegister/CardValidityPeriodInputField/CardValidityPeriodInputField";
import { CARD_FIELD_LENGTH } from "@/constants/cardForm";

export const checkIsOnlyDigits = (input: string) => /^\d*$/.test(input);

export const checkLengthMatches = (input: string, expectedLength: number) => {
  return input.length === expectedLength;
};

export const validateRange = (arg: number, min: number, max: number) => {
  return arg >= min && arg <= max;
};

export const validateMonthRange = (month: number) => {
  return validateRange(month, 1, 12);
};

export const checkExpiredValidityPeriod = (month: string, year: string) => {
  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  const inputYear = Number(year);
  const inputMonth = Number(month);

  return (
    inputYear < currentYear ||
    (inputYear === currentYear && inputMonth < currentMonth)
  );
};

export const validateCardNumberInput = (cardNumber: CardNumberUnits) => {
  const cardBrand = detectCardBrand(cardNumber.join(""));
  const cardNumberFormat = getCardNumberFormat(cardBrand);

  const invalidStatus = cardNumberFormat
    .map((expectedLength, index) =>
      validateCardNumberUnitInput(cardNumber[index] ?? "", expectedLength),
    )
    .find((status) => status !== "DEFAULT");

  return invalidStatus ?? "DEFAULT";
};

export const validateCardNumberUnitInput = (
  input: string,
  expectedLength: number,
) => {
  if (input.length === 0) return "EMPTY";
  if (!checkIsOnlyDigits(input)) return "NOT_NUMBER";
  if (!checkLengthMatches(input, expectedLength)) return "INVALID_LENGTH";

  return "DEFAULT";
};

export const validateExpiryMonth = (month: string, year: string) => {
  if (month.length === 0) return "EMPTY_MONTH";
  if (!checkIsOnlyDigits(month)) return "NOT_NUMBER";
  if (!checkLengthMatches(month, CARD_FIELD_LENGTH.VALIDITY_MONTH)) {
    return "INVALID_MONTH_LENGTH";
  }
  if (!validateMonthRange(+month)) return "INVALID_MONTH_RANGE";
  if (
    checkLengthMatches(year, CARD_FIELD_LENGTH.VALIDITY_YEAR) &&
    checkExpiredValidityPeriod(month, year)
  ) {
    return "EXPIRED_VALIDITY_PERIOD";
  }

  return "DEFAULT";
};

export const validateExpiryYear = (year: string, month: string) => {
  if (year.length === 0) return "EMPTY_YEAR";
  if (!checkIsOnlyDigits(year)) return "NOT_NUMBER";
  if (!checkLengthMatches(year, CARD_FIELD_LENGTH.VALIDITY_YEAR)) {
    return "INVALID_YEAR_LENGTH";
  }
  if (
    checkLengthMatches(month, CARD_FIELD_LENGTH.VALIDITY_MONTH) &&
    checkExpiredValidityPeriod(month, year)
  ) {
    return "EXPIRED_VALIDITY_PERIOD";
  }

  return "DEFAULT";
};

export const validateCVCInput = (input: string) => {
  if (input.length === 0) return "EMPTY";
  if (!checkIsOnlyDigits(input)) return "NOT_NUMBER";
  if (!checkLengthMatches(input, CARD_FIELD_LENGTH.CVC)) {
    return "INVALID_LENGTH";
  }

  return "DEFAULT";
};

export const validatePasswordInput = (input: string) => {
  if (input.length === 0) return "EMPTY";
  if (!checkIsOnlyDigits(input)) return "NOT_NUMBER";
  if (!checkLengthMatches(input, CARD_FIELD_LENGTH.PASSWORD)) {
    return "INVALID_LENGTH";
  }

  return "DEFAULT";
};

export const validateCardForm = (
  cardNumber: CardNumberUnits,
  cardCompany: CardCompany | null,
  { month, year }: ValidityPeriod,
  CVC: string,
  password: string,
) => {
  // 카드 번호 검증

  if (validateCardNumberInput(cardNumber) !== "DEFAULT") return false;

  // 카드사 검증
  if (!cardCompany) return false;

  // 유효기간 검증
  if (validateExpiryMonth(month, year) !== "DEFAULT") return false;
  if (validateExpiryYear(year, month) !== "DEFAULT") return false;

  // CVC 검증
  if (validateCVCInput(CVC) !== "DEFAULT") return false;

  // 비밀번호 검증
  if (validatePasswordInput(password) !== "DEFAULT") return false;

  return true;
};
