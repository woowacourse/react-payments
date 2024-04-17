const cardInputValidator = {
  validateMonth(month: string) {
    if (month.length !== 2) return false;

    if (month[0] !== "0" && month[0] !== "1") return false;

    if (+month < 1 || +month > 12) return false;

    return true;
  },

  validateFutureDate(month: number, year: number) {
    if (new Date().getTime() > new Date(2000 + year, month, 0).getTime()) {
      return false;
    }

    return true;
  },

  validateExpiration(expiration: string[]) {
    const [month, year] = expiration;

    if (year === "") {
      return this.validateMonth(month) ? true : false;
    }

    const [numericMonth, numericYear] = expiration.map((str) =>
      parseInt(str, 10)
    );

    return this.validateFutureDate(numericMonth, numericYear) ? true : false;
  },
};

export default cardInputValidator;
