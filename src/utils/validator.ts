export const checkIsNumber = (arg: number) => {
  return !Number.isNaN(arg);
};

export const checkIsInt = (arg: number) => {
  return checkIsNumber(arg) && arg === parseInt(`${arg}`);
};

export const validateRange = (arg: number, min: number, max: number) => {
  return arg >= min && arg <= max;
};

export const validateMonthRange = (month: number) => {
  return validateRange(month, 1, 12);
};

export const validateYearRange = (year: number) => {
  return validateRange(
    year,
    parseInt(`${new Date().getFullYear()}`.slice(2)),
    Infinity,
  );
};

export const validateCardNumberUnitRange = (cardNumberUnit: number) => {
  return validateRange(cardNumberUnit, 0, 9999);
};

export const validateCVCRange = (CVC: number) => {
  return validateRange(CVC, 0, 999);
};
