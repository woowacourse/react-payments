import type { ValidationResult } from "@/types";

export const validateCardNumber = (values: string[]): ValidationResult => {
  for (let i = 0; i < values.length; i++) {
    if (!values[i]) return { errorIndex: i, message: "카드 번호를 입력해주세요" };
  }
  return { errorIndex: -1, message: "" };
};

export const validateExpiryDate = (values: string[]): ValidationResult => {
  for (let i = 0; i < values.length; i++) {
    if (!values[i] || values[i].length < 2) return { errorIndex: i, message: "유효기간을 입력해주세요" };
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
