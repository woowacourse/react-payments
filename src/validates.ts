const isNumber = (value: string) => {
  return /^\d+$/.test(value);
};

const isValidMonth = (value: string) => {
  const num = Number(value);
  return Number.isInteger(num) && num >= 1 && num <= 12;
};

const isValidYear = (value: string) => {
  const currentYear = new Date().getFullYear() % 100;
  const num = Number(value);
  return Number.isInteger(num) && num >= currentYear && num <= currentYear + 5;
};

export const validates = {
  required: (value: string) => value === '',
  numberOnly: (value: string) => value !== '' && !isNumber(value),
  invalidLength: (value: string, length: number) => value !== '' && value.length < length,
  invalidMonth: (value: string) => value !== '' && !isValidMonth(value),
  invalidYear: (value: string) => value !== '' && !isValidYear(value),
};
