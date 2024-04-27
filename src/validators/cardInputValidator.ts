const cardInputValidator = {
  validateNumberInRange(number: number, min: number, max: number) {
    return number >= min && number <= max;
  },

  validatePastYear(year: string) {
    const currentYear = new Date().getFullYear() & 100;

    return parseInt(year, 10) <= currentYear;
  },

  validateMonth(month: string) {
    if (month.length !== 2) return false;

    return this.validateNumberInRange(parseInt(month, 10), 1, 12);
  },

  validateYear(year: string) {
    if (year.length !== 2) return false;

    return this.validatePastYear(year);
  },

  validateFutureDate(month: number, year: number) {
    const currentTime = new Date().getTime();

    const enteredDate = new Date(2000 + year, month, 0).getTime();

    return enteredDate > currentTime;
  },

  validateExpiration(expiration: { mm: string; yy: string; name: string }) {
    const { mm, yy, name } = expiration;

    if (name === "mm" && !this.validateMonth(mm)) return false;

    if (name === "yy" && !this.validateYear(yy)) return false;

    if (mm.length !== 2 || yy.length !== 2) return true;

    return this.validateFutureDate(parseInt(mm), parseInt(yy)) ? true : false;
  },
};

export default cardInputValidator;
