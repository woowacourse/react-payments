export const createFlags = (count: number): boolean[] => Array.from({length: count}, () => false);

export const computeNextTouched = (prev: boolean[], index: number) =>
  prev.map((touched, i) => (i === index ? true : touched));

export const computeNextErrorInfo = (
  prevFlag: boolean[],
  prevMessages: string[],
  index: number,
  hasError: boolean,
  errorMsg: string,
) => {
  const flag = prevFlag.map((f, i) => (i === index ? hasError : f));
  const messages = prevMessages.map((m, i) => (i === index ? (hasError ? errorMsg : '') : m));
  const firstErrorIdx = flag.indexOf(true);
  const hasAnyError = firstErrorIdx !== -1;
  return {flag, messages, currentErrorMsg: hasAnyError ? messages[firstErrorIdx] : '', hasAnyError};
};
