export const isNumericString = (str: string) => {
  const regex = /^\d+$/;
  return regex.test(str);
};

export const isValidMonth = (month: string) => {
  if (month.length === 1) return /^[0-1]$/.test(month); // 첫 자리 0,1만
  if (month.length === 2) return /^(0[1-9]|1[0-2])$/.test(month); // 01~12
  return true;
};

export const isValidInputNumber = (input: string, maxLength: number) => {
  if (input !== '' && !isNumericString(input)) return false;
  if (input.length > maxLength) return false;
  return true;
};
