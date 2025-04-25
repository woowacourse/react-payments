export const validationCardInfo = (value: string, valueLength: number) => {
  if (value.length < valueLength) {
    return {
      isValid: false,
      errorMessage: `${valueLength}자리의 숫자를 입력하셔야 합니다.`,
    };
  }

  if (!new RegExp(`^\\d{${valueLength}}$`).test(value)) {
    return {
      isValid: false,
      errorMessage: '숫자만 입력 가능합니다.',
    };
  }

  return { isValid: true, errorMessage: '' };
};
