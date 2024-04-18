export const validateCardNumber = (value: string): string => {
  if (value !== "" && isNaN(Number(value))) {
    return "숫자만 입력 가능합니다.";
  }
  if (value !== "" && value.length !== 4) {
    return "숫자 4자리를 입력해주세요.";
  }
  return "";
};

export const validateCardExpiration = (value: string, index: number): string => {
  if (value !== "" && isNaN(Number(value))) {
    return "숫자만 입력 가능합니다.";
  }
  if (value !== "" && value.length !== 2) {
    return "숫자 2개를 정확히 입력해주세요.";
  }
  if (value !== "" && index === 0 && !(Number(value) >= 1 && Number(value) <= 12)) {
    return "월은 1이상 12이하여야 합니다.";
  }
  return "";
};

export const validateUserName = (value: string): string => {
  if (value !== "" && !/^[a-zA-Z\s]+$/.test(value)) {
    return "영어만 입력 가능합니다.";
  }
  return "";
};
