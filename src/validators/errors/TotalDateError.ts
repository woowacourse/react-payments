class TotalDateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'totalDate';
  }
}

export default TotalDateError;
