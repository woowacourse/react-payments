export const isNotNumber = (value: string) =>
  Number.isNaN(Number(value)) || value.includes(' ') || value.includes('.');

export const isNotAlphabet = (value: string) => !/^[a-zA-Z\s]*$/.test(value);

const today = new Date();
const currentYear = today.getFullYear() % 100;
const currentMonth = today.getMonth() + 1;

const isValidMonth = (month: number) => month >= 1 && month <= 12;
const isValidYear = (year: number) => year >= currentYear;
const isValidDateInCurrentYear = (month: number, year: number) =>
  year === currentYear && month > currentMonth;

export const isValidExpiredDate = (month: number, year: number) =>
  isValidMonth(month) &&
  isValidYear(year) &&
  isValidDateInCurrentYear(month, year);
