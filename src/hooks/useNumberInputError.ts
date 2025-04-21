import { useEffect, useState } from 'react';
import isZeroOrExactLength from '../utils/isExactLength';

function useNumberInputError(value: string, maxLength: number, extraErrorCondition?: boolean) {
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (!isZeroOrExactLength(value, maxLength)) {
      setIsError(true);
      return;
    }
    if (extraErrorCondition) {
      setIsError(true);
      return;
    }

    setIsError(false);
  }, [value]);

  return { isError };
}

export default useNumberInputError;
