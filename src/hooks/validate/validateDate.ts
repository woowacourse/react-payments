import isValidNumberRange from "./isValidNumberRange";

const getCurrentYear = () => {
  return new Date().getFullYear() % 100;
};

const getCurrentMonth = () => {
  return Math.floor(new Date().getMonth() + 1);
};

const validateMonth = ({ month, year }: { month: number; year: number }) => {
  if (!isValidNumberRange({ value: month, min: 1, max: 12 })) {
    return {
      isError: true,
      errorMessage: "01 ~ 12 사이의 숫자만 입력 가능합니다",
    };
  }

  if (year === getCurrentYear()) {
    if (month < getCurrentMonth()) {
      return { isError: true, errorMessage: "유효기간이 지났습니다" };
    }
  }

  return { isError: false, errorMessage: "" };
};

const validateYear = ({ month, year }: { month: number; year: number }) => {
  if (!isValidNumberRange({ value: year, min: 0, max: 99 })) {
    return {
      isError: true,
      errorMessage: "00 ~ 99 사이의 숫자만 입력 가능합니다",
    };
  }

  if (year < getCurrentYear()) {
    return { isError: true, errorMessage: "유효기간이 지났습니다" };
  }

  if (year === getCurrentYear()) {
    if (month !== 0 && month < getCurrentMonth()) {
      return { isError: true, errorMessage: "유효기간이 지났습니다" };
    }
  }

  return { isError: false, errorMessage: "" };
};

export { validateMonth, validateYear };
