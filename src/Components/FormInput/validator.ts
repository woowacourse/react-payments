export interface validatorReturn<T> {
  isValid: boolean;
  message?: string;
  value?: T;
}

export type ValidatorType<T> = (input: string, name?: "month" | "year") => validatorReturn<T>;

const ERROR_MESSAGES = {
  onlyNumber: "숫자만 입력해주세요.",
  notValidMonth: "유효한 월이 아닙니다",
  under15Length: "최대 15자로 입력해주세요.",
  onlyEnglish: "영어만 입력해주세요.",
};

export function cardNumbersValidator(input: string): validatorReturn<string> {
  const number = Number(input);

  if (Number.isNaN(number)) {
    return { isValid: false, message: ERROR_MESSAGES.onlyNumber };
  }
  return { isValid: true, value: input };
}

export function cardPeriodValidator(input: string, category?: "month" | "year"): validatorReturn<number> {
  const number = Number(input);
  const monthValid = { min: 0, max: 12 };

  if (Number.isNaN(number)) {
    return { isValid: false, message: ERROR_MESSAGES.onlyNumber };
  }
  if (category === "month" && (number < monthValid.min || number > monthValid.max)) {
    return { isValid: false, message: ERROR_MESSAGES.notValidMonth };
  }
  return { isValid: true, value: number };
}

export function cardOwnerValidator(input: string): validatorReturn<string> {
  if (input.length > 15) {
    return { isValid: false, message: ERROR_MESSAGES.under15Length };
  }
  if (!/[a-zA-Z ]/.test(input) && input) {
    return { isValid: false, message: ERROR_MESSAGES.onlyEnglish };
  }
  return { isValid: true, value: input };
}
