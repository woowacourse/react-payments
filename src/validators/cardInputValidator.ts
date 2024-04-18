const cardInputValidator = {
  validateMonth(month: string) {
    if (month.length === 0) return true;

    if (month.length !== 2) return false;

    if (month[0] !== "0" && month[0] !== "1") return false;

    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) return false;

    return true;
  },

  validateYear(year: string) {
    if (year.length === 0) return true;

    if (year.length !== 2) return false;

    const date = new Date();

    const currentYear = date.getFullYear() % 100;

    return parseInt(year, 10) >= currentYear;
  },

  validateFutureDate(month: number, year: number) {
    if (new Date().getTime() > new Date(2000 + year, month, 0).getTime()) {
      return false;
    }

    return true;
  },

  validateExpiration(expiration: string[]) {
    const [month, year] = expiration;

    if (!this.validateMonth(month)) return false;

    if (!this.validateYear(year)) return false;

    const [numericMonth, numericYear] = expiration.map((str) =>
      parseInt(str, 10)
    );

    if (!this.validateFutureDate(numericMonth, numericYear)) return false;

    return true;
  },
};

export default cardInputValidator;
