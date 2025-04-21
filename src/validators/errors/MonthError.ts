class MonthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'month';
  }
}

export default MonthError;
