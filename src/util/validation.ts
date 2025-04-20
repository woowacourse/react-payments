const isValidLength = (number: string, maxLength: number) => {
  if (number.length < maxLength) {
    return false;
  }
  return true;
};

const isValidNumber = (number: string) => {
  if (Number.isInteger(number)) {
    return true;
  }
  return false;
};

const isValidMonthRange = (number: string) => {
  if (1 <= Number(number) && Number(number) <= 12) {
    return true;
  }
  return false;
};

const isValidYearRange = (number: string) => {
  if (Number(number) <= 99 && Number(number) >= 25) {
    return true;
  }
  return false;
};

export { isValidLength, isValidNumber, isValidMonthRange, isValidYearRange };
