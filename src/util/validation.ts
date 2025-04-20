const isValidLength = (number: string, maxLength: number) => {
  return number.length >= maxLength;
};

const isValidNumber = (number: string) => {
  const regex = /^[0-9]*$/;
  return regex.test(number);
};

const isValidMonthRange = (number: string) => {
  return Number(number) >= 1 && Number(number) <= 12;
};

const isValidYearRange = (number: string) => {
  return Number(number) >= 25 && Number(number) <= 99;
};

export { isValidLength, isValidNumber, isValidMonthRange, isValidYearRange };
