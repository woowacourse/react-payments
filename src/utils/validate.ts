export const isNumeric = (value: string) => {
  if (value === "") {
    return true;
  }
  return /^\d+$/.test(value);
};

export const isInputFilled = (value: string, fullLength: number) => {
  return value.length === fullLength;
};

export const isMonthValid = (month: number) => {
  return month >= 1 && month <= 12;
};

export const isYearValid = (year: number) => {
  return new Date().getFullYear() % 2000 <= year;
};
