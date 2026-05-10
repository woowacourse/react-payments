import type { CardBrandType } from "../../../common/types/CardBrand";
import type { CardCompanyType } from "../../../common/types/CardCompany";
import { CARD } from "../constants";
import { isCvcLengthValid } from "./cvc";
import {
  isMonthLengthValid,
  isMonthRangeValid,
  isYearLengthValid,
} from "./expiryDate";
import { isPasswordLengthValid } from "./password";

export const isCvcFieldValid = (cvc: string) => {
  return isCvcLengthValid(cvc);
};

export const isPasswordFieldValid = (password: string) => {
  return isPasswordLengthValid(password);
};

export const isExpiryFieldValid = (month: string, year: string) => {
  return (
    isMonthRangeValid(month) &&
    isMonthLengthValid(month) &&
    isYearLengthValid(year)
  );
};

export const isCardCompanyFieldValid = (
  cardCompany: CardCompanyType | null,
) => {
  return cardCompany !== null;
};

export const isCardNumberFieldValid = (
  cardNumber: string,
  cardBrand: CardBrandType,
) => {
  if (cardBrand === "visa" && cardNumber.length === CARD.VISA.LENGTH) {
    return true;
  }
  if (
    cardBrand === "masterCard" &&
    cardNumber.length === CARD.MASTERCARD.LENGTH
  ) {
    return true;
  }
  if (cardBrand === "diners" && cardNumber.length === CARD.DINER.LENGTH) {
    return true;
  }
  if (cardBrand === "amex" && cardNumber.length === CARD.AMEX.LENGTH) {
    return true;
  }
  if (cardBrand === "unionPay" && cardNumber.length === CARD.UNION_PAY.LENGTH) {
    return true;
  }
  if (cardNumber.length === 16) {
    // 정해진 카드사의 카드번호를 입력하지 않고 16자리 모두 채우면, 아무 에러도 안 뜬 채로 다음 단계로 넘어갈 수 없음
    // 지금은 임시로 16자리 모두 채우면 넘어가지만 나중에 해당 부분 수정 필요
    return true;
  }
  return false;
};
