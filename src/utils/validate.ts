import { CARD_BRAND_RULE, ERROR_MESSAGE, VALIDATION_RULE } from '../constants';

export const expirationDateValidator = (inputValue: string, index: number) => {
  // 월
  if (index === 0 && validateMonth(inputValue, VALIDATION_RULE.MAX_MONTH)) {
    return {
      error: true,
      errorMessage: ERROR_MESSAGE.INVALID_MONTH,
    };
  }

  // 년도
  if (index === 1 && validateYear(inputValue)) {
    return {
      error: true,
      errorMessage: ERROR_MESSAGE.INVALID_YEAR,
    };
  }

  return {
    error: false,
    errorMessage: '',
  };
};

// 숫자 외의 값이 입력되는 경우 검증
export const validateNaN = (inputValue: string) => isNaN(Number(inputValue));

// cardBrand 규칙이 맞는지 검증
export const validateCardBrand = (inputValue: string) => {
  return CARD_BRAND_RULE.some((brand) => !brand.pattern.test(inputValue));
};

// 월 범위를 벗어난 경우
const validateMonth = (inputValue: string, inputMaxDate: number) =>
  Number(inputValue) === 0 || Number(inputValue) > inputMaxDate;

// 년도 범위를 벗어난 경우 (26이상 99이하)
export const validateYear = (inputValue: string) => {
  const currentYear = new Date(Date.now()).getFullYear() % 100;
  return Number(inputValue) < currentYear;
};
