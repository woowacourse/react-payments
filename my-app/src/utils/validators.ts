import { decideBrandName } from "./decideBrandName";

type ValidationResult = { errorIndex: number; message: string };

export const validateCardNumber = (values: string[]): ValidationResult => {
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value === "" || value === undefined) continue;
    if (!/^\d+$/.test(value)) return { errorIndex: i, message: "숫자만 입력 가능합니다" };
    if (i === 0 && decideBrandName(value) === "")
      return { errorIndex: i, message: "이 카드 브랜드는 지원하지 않습니다." };
  }
  return { errorIndex: -1, message: "" };
};

export const validateExpiryDate = (values: string[]): ValidationResult => {
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value === "" || value === undefined) continue;
    if (!/^\d+$/.test(value)) return { errorIndex: i, message: "숫자만 입력 가능합니다" };
    if (i === 0 && !/^(0[1-9]|1[0-2])$/.test(value))
      return { errorIndex: i, message: "유효한 날짜를 입력해주세요" };
  }
  return { errorIndex: -1, message: "" };
};

export const validateCvc = (value: string): ValidationResult => {
  if (value === "" || value === undefined) return { errorIndex: -1, message: "" };
  if (!/^\d+$/.test(value)) return { errorIndex: 0, message: "숫자만 입력 가능합니다" };
  return { errorIndex: -1, message: "" };
};
