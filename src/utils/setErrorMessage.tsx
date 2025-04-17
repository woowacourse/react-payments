export function setErrorMessage(
  cardNumbersError: string[],
  errorMessage: string,
  index: number,
  setError: Function
) {
  const newError = [...cardNumbersError];
  newError[index] = errorMessage;
  setError(newError);
}
