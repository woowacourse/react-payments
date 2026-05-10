import type { CardNumberUnits } from "@/components/CardNumberInputField/CardNumberInputField";
import { detectCardBrand } from "./card";
import {
  CARD_BRANDS,
  DEFAULT_CARD_NUMBER_TOTAL_LENGTH,
} from "@/constants/cardBrands";
import type { CardCompany } from "@/constants/cardCompanies";
import type { ValidityPeriod } from "@/components/CardValidityPeriodInputField/CardValidityPeriodInputField";

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

export const checkCardNumberLength = (cardNumber: CardNumberUnits) => {
  const brandName = detectCardBrand(cardNumber);
  const cardNumberLength = cardNumber.join("").length;
  const expectedLength = brandName
    ? CARD_BRANDS[brandName].totalLength
    : DEFAULT_CARD_NUMBER_TOTAL_LENGTH;

  return cardNumberLength === expectedLength;
};

export const validateCardForm = (
  cardNumber: CardNumberUnits,
  cardCompany: CardCompany | null,
  { month, year }: ValidityPeriod,
  CVC: string,
  password: string,
) => {
  // 카드 번호 검증
  if (!checkCardNumberLength(cardNumber)) return false;

  // 카드사 검증
  if (!cardCompany) return false;

  // 유효기간 검증
  if (!checkLengthMatches(month, 2)) return false;
  if (!validateMonthRange(+month)) return false;
  if (!checkLengthMatches(year, 2)) return false;
  if (checkExpiredValidityPeriod(month, year)) return false;

  // CVC 번호 검증
  if (!checkLengthMatches(CVC, 3)) return false;

  // 비밀번호 검증
  if (!checkLengthMatches(password, 2)) return false;

  return true;
};
