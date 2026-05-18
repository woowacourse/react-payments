import { detectBrand } from "@/constants/cardBrand";
import type { ValidationResult } from "@/types";

export const validateCardNumber = (values: string[]): ValidationResult => {
  for (let i = 0; i < values.length; i++) {
    if (!values[i]) return { errorIndex: i, message: "카드 번호를 입력해주세요" };
  }
  const joined = values.join("");
  if (joined.length >= 8 && detectBrand(joined) === "")
    return { errorIndex: -2, message: "이 카드 브랜드는 지원하지 않습니다." };

  return { errorIndex: -1, message: "" };
};

export const validateExpiryDate = (values: string[]): ValidationResult => {
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (!value || value.length < 2) return { errorIndex: i, message: "유효기간을 입력해주세요" };
    if (i === 0 && !/^(0[1-9]|1[0-2])$/.test(value))
      return { errorIndex: i, message: "유효한 날짜를 입력해주세요" };
  }
  return { errorIndex: -1, message: "" };
};

export const validateCvc = (value: string): ValidationResult => {
  if (value.length < 3) return { errorIndex: 0, message: "CVC를 입력해주세요" };
  return { errorIndex: -1, message: "" };
};

export const validatePassword = (value: string): ValidationResult => {
  if (value.length < 2) return { errorIndex: 0, message: "비밀번호를 입력해주세요" };
  return { errorIndex: -1, message: "" };
};
