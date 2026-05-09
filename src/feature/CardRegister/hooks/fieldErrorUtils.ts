export const createFlags = (count: number): boolean[] => Array.from({length: count}, () => false);

export const computeNextTouched = (prev: boolean[], index: number) =>
  prev.map((touched, i) => (i === index ? true : touched));

export const computeNextErrInfo = (
  prevErrFlags: boolean[],
  prevErrMessages: string[],
  index: number,
  hasErr: boolean,
  errMsg: string,
) => {
  const errFlags = prevErrFlags.map((prevHasErr, i) => (i === index ? hasErr : prevHasErr));
  const errMessages = prevErrMessages.map((prevErrMsg, i) => (i === index ? (hasErr ? errMsg : '') : prevErrMsg));
  return {errFlags, errMessages};
};
