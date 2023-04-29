export const isNumeric = (input: string) => {
  return /^[0-9]*$/.test(input);
};

export const isEnglish = (input: string, maxLength: number = 30) => {
  return input.length <= maxLength && /^[a-zA-Z\s]*$/.test(input);
};

export const hasValidLength = (input: string, length: number = 3) => {
  return input.length === length;
};

export const isValidMonth = (input: string) => {
  return Number(input) >= 1 && Number(input) <= 12;
};

export const isOverMaxLength = (input: string, maxLength: number) => {
  return input.length > maxLength;
};

export const isValidYear = (input: string) => {
  return /^[0-9]{2}$|^$/.test(input);
};

export const isValidDate = (month: string, year: string) => {
  if (!isValidMonth(month)) return false;
  if (!isValidYear(year)) return false;

  const currentDate = new Date();
  const currentMonth = String(currentDate.getMonth() + 1);
  const currentYear = String(currentDate.getFullYear()).slice(2);

  if (Number(year) > Number(currentYear)) return true;

  return Number(year) === Number(currentYear) ? Number(month) >= Number(currentMonth) : false;
};
