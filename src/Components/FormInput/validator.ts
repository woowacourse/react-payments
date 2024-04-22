export interface validatorReturn<T> {
  isValid: boolean;
  message?: string;
  value?: T;
}

//TODO: 에러 메세지 수정
export function cardNumbersValidator(input: string): validatorReturn<number> {
  const number = Number(input);
  if (Number.isNaN(number)) return { isValid: false, message: "숫자만 입력해주세요." };
  return { isValid: true, value: number };
}

export function cardPeriodValidator(input: string, category: "month" | "year"): validatorReturn<number> {
  const number = Number(input);
  if (Number.isNaN(number)) return { isValid: false, message: "숫자만 입력해주세요." };
  if (category === "month" && (number < 0 || number > 12)) return { isValid: false, message: "유효한 월이 아닙니다" };
  return { isValid: true, value: number };
}

export function cardOwnerValidator(input: string): validatorReturn<string> {
  if (input.length > 15) return { isValid: false, message: "최대 15자로 입력해주세요." };
  return { isValid: true, value: input };
}
