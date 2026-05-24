import type { ValidationResult } from "@/types";

const VALID: ValidationResult = { errorIndex: -1, message: "" };

export const validateCardNumber = (values: string[], fieldConfig: number[]): ValidationResult => {
  const errorIndex = values.findIndex((v, i) => !v || v.length < fieldConfig[i]);
  if (errorIndex !== -1) return { errorIndex, message: "카드 번호를 입력해주세요" };
  return VALID;
};

export const validateExpiryDate = (values: string[]): ValidationResult => {
  const errorIndex = values.findIndex((v) => !v || v.length < 2);
  if (errorIndex !== -1) return { errorIndex, message: "유효기간을 입력해주세요" };

  const month = parseInt(values[0], 10);
  if (month < 1 || month > 12) {
    return { errorIndex: 0, message: "유효하지 않은 월입니다" };
  }

  return VALID;
};

export const validateCvc = (value: string): ValidationResult => {
  if (value.length < 3) return { errorIndex: 0, message: "CVC를 입력해주세요" };
  return VALID;
};

export const validatePassword = (value: string): ValidationResult => {
  if (value.length < 2) return { errorIndex: 0, message: "비밀번호를 입력해주세요" };
  return VALID;
};
