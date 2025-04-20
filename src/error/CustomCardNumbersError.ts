class CustomCardNumbersError extends Error {
  index;

  constructor(message: string, index: number = -1) {
    super(message);
    this.index = index;
  }
}

export default CustomCardNumbersError;
