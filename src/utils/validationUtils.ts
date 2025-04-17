export const validatorUtils = {
  isNotEmpty: (value: string) => value.trim() !== '',
  isNumber: (value: string) => !Number.isNaN(Number(value)),
  isValidLength: (value: string, length: number) => value.length === length,
  isValidNumberRange: (value: number, min: number, max: number) =>
    value >= min && value <= max,
  isValidExpirationDate: (month: number, year: number) => {
    const today = new Date();
    const currentFullYear = today.getFullYear();
    const currentYear = currentFullYear % 100;
    const currentMonth = today.getMonth() + 1;

    if (currentYear < year) {
      return true;
    }
    if (currentYear === year) {
      return month >= currentMonth;
    }
    return false;
  },
};
