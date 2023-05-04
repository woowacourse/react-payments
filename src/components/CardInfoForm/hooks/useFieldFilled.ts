import { useCallback, useEffect, useState } from 'react';

import type { InputRef } from '../types';

const useFieldFilled = (inputRefs: InputRef[]) => {
  const [isFilled, setIsFilled] = useState(false);

  const isMaxLength = useCallback((inputRef: InputRef) => {
    if (inputRef.current === null) return;

    const { value, minLength } = inputRef.current;

    return value.length >= minLength;
  }, []);

  useEffect(() => {
    if (inputRefs.every(isMaxLength)) {
      setIsFilled(true);
    }
  }, [inputRefs, isMaxLength, setIsFilled]);

  return isFilled;
};

export default useFieldFilled;
