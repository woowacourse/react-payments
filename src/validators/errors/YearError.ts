class YearError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'year';
  }
}

export default YearError;
