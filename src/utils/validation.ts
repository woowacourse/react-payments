export const isNotNumber = (value: string) =>
  Number.isNaN(Number(value)) || value.includes(' ') || value.includes('.');

export const isNotAlphabet = (value: string) => !/^[a-zA-Z\s]*$/.test(value);

const today = new Date();
const currentYear = today.getFullYear() % 100;
const currentMonth = today.getMonth() + 1;

const isMonthNumber = (month: number) => month >= 1 && month <= 12;
const isValidYear = (year: number) => year >= currentYear;
const isValidMonth = (month: number, year: number) =>
  year === currentYear
    ? month > currentMonth && month <= 12
    : isMonthNumber(month);

export const isValidExpiredDate = (month: number, year: number) =>
  isValidYear(year) && isValidMonth(month, year);

export const expiredDateValidator = {
  month: isMonthNumber,
  year: isValidYear,
};

export const isExpiredValidatorKey = (
  key: string,
): key is keyof typeof expiredDateValidator => key in expiredDateValidator;
