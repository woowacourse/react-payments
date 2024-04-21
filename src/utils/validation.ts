export const validateIsValidLength = (
  newValue: string,
  validLength: number
) => {
  if (newValue.length !== validLength) {
    return `${validLength} 자리로 입력해주세요.`;
  } else {
    return "";
  }
};

export const validateExpirationDate = (input: string[]): string => {
  const [month, year] = input.map(Number);
  const today = new Date();

  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear() - 2000;

  if (year && month) {
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return "이미 만료된 카드입니다.";
    }
  }

  return "";
};

export const validateMonth = (month: number) => {
  if (month < 1 || month > 12) {
    return "월을 유효한 2자리수로 입력해 주세요.";
  }
  return "";
};

export const validateOwnerName = (name: string) => {
  const alphabetRegex = /^[a-zA-Z\s]*$/;
  if (!alphabetRegex.test(name)) {
    return "이름은 영어 대문자로 입력해 주세요.";
  }

  const doubleSpaceRegex = /\s{2,}/;
  if (doubleSpaceRegex.test(name)) {
    return "이름의 공백은 2회이상 연속되지 않아야 합니다.";
  }
  return "";
};
