export interface validatorReturn {
  isValid: boolean;
  message?: string;
  value?: string;
}

export type ValidatorType = (input: string, name?: "month" | "year") => validatorReturn;

const ERROR_MESSAGES = {
  ONLY_NUMBER: "숫자만 입력해주세요.",
  NOT_VALID_MONTH: "유효한 월이 아닙니다",
  ONLY_UNDER_15_LENGTH: "최대 15자로 입력해주세요.",
  ONLY_ENGLISH: "영어만 입력해주세요.",
};

export function cardNumbersValidator(input: string): validatorReturn {
  const number = Number(input);

  if (Number.isNaN(number)) {
    return { isValid: false, message: ERROR_MESSAGES.ONLY_NUMBER };
  }
  return { isValid: true, value: input };
}

export function cardPeriodValidator(input: string, category?: "month" | "year"): validatorReturn {
  const number = Number(input);
  const VALID_MONTH = { MIN: 0, MAX: 12 };

  if (Number.isNaN(number)) {
    return { isValid: false, message: ERROR_MESSAGES.ONLY_NUMBER };
  }
  if (category === "month" && (number < VALID_MONTH.MIN || number > VALID_MONTH.MAX)) {
    return { isValid: false, message: ERROR_MESSAGES.NOT_VALID_MONTH };
  }
  return { isValid: true, value: input };
}

const isEnglish = (input: string) => {
  return /^[a-zA-Z]+$/.test(input);
};

export function cardOwnerValidator(input: string): validatorReturn {
  if (input.length > 15) {
    return { isValid: false, message: ERROR_MESSAGES.ONLY_UNDER_15_LENGTH };
  }
  if (input && !isEnglish(input)) {
    return { isValid: false, message: ERROR_MESSAGES.ONLY_ENGLISH };
  }
  return { isValid: true, value: input };
}

export function cardCVCValidator(input: string) {
  //TODO: CVC Valid 빌드
  return { isValid: true, value: input };
}
