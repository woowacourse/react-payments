export const createFlags = (count: number): boolean[] => Array.from({length: count}, () => false);

export const computeNextTouched = (prev: boolean[], index: number) =>
  prev.map((touched, i) => (i === index ? true : touched));

export const computeNextErrorInfo = (
  prevErrorFlags: boolean[],
  prevErrorMessages: string[],
  index: number,
  hasError: boolean,
  errorMsg: string,
) => {
  const errorFlags = prevErrorFlags.map((prevHasError, i) => (i === index ? hasError : prevHasError));
  const errorMessages = prevErrorMessages.map((prevErrorMsg, i) => (i === index ? (hasError ? errorMsg : '') : prevErrorMsg));
  const firstErrorIndex = errorFlags.indexOf(true);
  const hasAnyError = firstErrorIndex !== -1;
  return {errorFlags, errorMessages, currentErrorMsg: hasAnyError ? errorMessages[firstErrorIndex] : '', hasAnyError};
};
