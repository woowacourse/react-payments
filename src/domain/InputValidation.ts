function validateNumber(n: string) {
  return Number.isInteger(Number(n));
}

function validateMonth(n: string) {
  const month = Number(n);
  return 1 <= month && month <= 12;
}

function validateYear(n: string) {
  const year = Number(n);
  return 0 <= year && year <= 99;
}

function validateUpperCase(str: string) {
  return /^[A-Z]+$/.test(str);
}

interface ValidationMap {
  [key: string]: (n: string) => boolean;
}

const Validation: ValidationMap = {
  cardNumber: (n: string) => validateNumber(n),
  month: (n: string) => validateNumber(n) && validateMonth(n),
  year: (n: string) => validateNumber(n) && validateYear(n),
  userName: (n: string) => validateUpperCase(n),
};

export default Validation;
