export const isInteger = (value: string) => {
  return Number.isInteger(Number(value));
};

export const hasFourDigit = (value: string) => {
  return value.length === 4;
};

export const hasTwoDigit = (value: string) => value.length === 2;

export const isValidMonth = (value: string) =>
  1 <= Number(value) && Number(value) <= 12;

export const isValidDate = ({ year, month }: ExpirationDate) => {
  if (year === '') return true;

  const currentDate = new Date();
  const inputDate = new Date(Number(year) + 2000, Number(month));

  return inputDate > currentDate;
};

export const isEnglishCharacter = (value: string) => {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(value);
};

export const isNotEmptyString = (value: string) => {
  return value !== '';
};

export const isValidCVC = (value: string) => {
  return value.length === 3;
};

export const isValidPassword = (value: string) => {
  return value.length === 2;
};
