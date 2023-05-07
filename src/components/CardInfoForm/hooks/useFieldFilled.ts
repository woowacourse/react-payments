import { useCallback, useEffect, useState } from 'react';

import type { InputRef } from '../types';

const useFieldFilled = (inputRefs: InputRef[]) => {
  const [isFilled, setIsFilled] = useState(false);

  const isMinLength = useCallback((inputRef: InputRef) => {
    if (inputRef.current === null) return;

    const { value, minLength } = inputRef.current;

    return value.length >= minLength;
  }, []);

  const isValid = useCallback(
    (inputRef: InputRef) => inputRef.current?.checkValidity(),
    [],
  );

  useEffect(() => {
    if (inputRefs.every(isMinLength) && inputRefs.every(isValid)) {
      setIsFilled(true);
      return;
    }

    setIsFilled(false);
  }, [inputRefs, isMinLength, isValid]);

  return isFilled;
};

export default useFieldFilled;
