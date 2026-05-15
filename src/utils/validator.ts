export const checkIsNumber = (arg: number) => {
  return !Number.isNaN(arg);
};

export const checkIsInt = (arg: number) => {
  return checkIsNumber(arg) && arg === parseInt(`${arg}`);
};

export const validateRange = (arg: number, min: number, max: number) => {
  return arg >= min && arg <= max;
};

export const checkIsGreaterThanZero = (arg: number) => {
  return checkIsNumber(arg) && arg > 0;
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

// TODO: 도메인이 있는 로직을 사용하는 곳으로 옮기기

export const validateCVCRange = (CVC: number) => {
  return validateRange(CVC, 0, 999);
};

export const validatePasswordRange = (password: number) => {
  return validateRange(password, 0, 99);
};
