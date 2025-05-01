import isZeroOrExactLength from '../utils/isExactLength';

function useNumberInputError(value: string, maxLength: number, extraErrorCondition?: boolean) {
  const isError = !isZeroOrExactLength(value, maxLength) || !!extraErrorCondition;

  return { isError };
}

export default useNumberInputError;
