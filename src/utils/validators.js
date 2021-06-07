export const isNumberType = (text) => {
  const pattern = /([0-9])/g;
  return pattern.test(text);
};

export const isMonthType = (text) => {
  const pattern = /[1-9]|([0][1-9])|([1][0,1,2])/g;
  const isNumberInRange = Number(text) >= 1 && Number(text) <= 12;
  return pattern.test(text) && isNumberInRange;
};

export const isValidYearType = (yearText) => {
  const currentYear = new Date().getFullYear() % 100;
  const yearInput = Number(yearText);
  const isValidYearInput = yearInput >= currentYear && yearInput <= currentYear + 5;
  return isValidYearInput;
};

export const isEnglishTextType = (text) => {
  const pattern = /([a-z]|[A-Z])|(\s)/;
  return pattern.test(text);
};
