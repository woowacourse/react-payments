type validateReturnValue = { isError: boolean; message: string };
type validator = (value: string) => validateReturnValue;

export const executeValidators = (
  validators: validator[],
  value: string
): validateReturnValue => {
  const result = { isError: false, message: "" };

  validators.map((validator) => {
    const validatingResult = validator(value);

    if (validatingResult.isError === true) {
      result.isError = validatingResult.isError;
      result.message = validatingResult.message;
      return;
    }
  });
  return result;
};

export const isInvalidNumber = (value: string) => {
  if (value.length !== 0 && !Number.isInteger(Number(value))) {
    return { isError: true, message: "숫자만 입력해주세요" };
  }

  return { isError: false, message: "" };
};

export const isInvalidCardNumberLength = (value: string) => {
  if (value.length !== 4) {
    return { isError: true, message: "네 자리 수를 입력해주세요" };
  }
  return { isError: false, message: "" };
};

export const isInvalidDateLength = (value: string) => {
  if (value.length !== 2) {
    return { isError: true, message: "두 자리 수를 입력해주세요" };
  }
  return { isError: false, message: "" };
};

export const isInvalidMonth = (value: string) => {
  if (Number(value) < 1 || Number(value) > 12) {
    return { isError: true, message: "1~12월 중 하나를 입력해주세요" };
  }
  return { isError: false, message: "" };
};

export const isInvalidYear = (value: string) => {
  if (Number(value) < 24) {
    return { isError: true, message: "유효한 년도를 입력해주세요" };
  }
  return { isError: false, message: "" };
};

export const isInvalidOwnerName = (upperName: string) => {
  const pattern: RegExp = /^[A-Z\s]*$/; // 영문자 대문자 또는 공백만 허용

  if (upperName.length !== 0 && !pattern.test(upperName)) {
    return { isError: true, message: "영문자만 입력해주세요" };
  }
  return { isError: false, message: "" };
};

export const isInvalidNameLength = (value: string) => {
  if (value.length < 1 && value.length > 15) {
    return { isError: true, message: "1자 ~ 15자의 이름을 입력해주세요" };
  }
  return { isError: false, message: "" };
};
