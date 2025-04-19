export const validatorUtils = {
  isNotEmpty: (value: string) => value.trim() !== '',
  isNumber: (value: string) => !Number.isNaN(Number(value)),
  isValidLength: (value: string, length: number) => value.length === length,
  isValidNumberRange: (value: number, min: number, max: number) =>
    value >= min && value <= max,
  isValidExpirationDate: (month: string, year: string) => {
    const numberMonth = Number(month);
    const numberYear = Number(year);
    const today = new Date();
    const currentFullYear = today.getFullYear();
    const currentYear = currentFullYear % 100;
    const currentMonth = today.getMonth() + 1;

    if (month === '' && numberYear === currentYear) {
      return true;
    }

    if (currentYear < numberYear || year === '') {
      return true;
    }

    if (currentYear === numberYear) {
      return numberMonth >= currentMonth;
    }
    return false;
  },
};
