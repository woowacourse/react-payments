export const createFlags = (count: number): boolean[] => Array.from({length: count}, () => false);

export const computeNextTouched = (prev: boolean[], index: number) =>
  prev.map((touched, i) => (i === index ? true : touched));

export const computeNextErrorInfo = (
  prevFlag: boolean[],
  index: number,
  hasError: boolean,
  errorMsg: string,
) => {
  const flag = prevFlag.map((f, i) => (i === index ? hasError : f));
  const hasAnyError = flag.some(Boolean);
  return {flag, currentErrorMsg: hasAnyError ? errorMsg : '', hasAnyError};
};
