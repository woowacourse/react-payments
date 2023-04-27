import { useState } from 'react';

import * as Type from '@Types/index';

function useInput<T>(initValue: T, validFns: Type.ValidationFn<T>[]): [T, (newValue: T) => void, string | null] {
  const [value, setValue] = useState(initValue);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const updateValue = (newValue: T) => {
    setErrorMessage(null);

    let error: undefined | Type.ValidationErrorType;

    validFns.every((fn) => {
      const result = fn(newValue);
      if (!result.ok) {
        error = result.error;
        return false;
      }

      return true;
    });

    if (!error) setValue(newValue);
    else if (error && error.type === 'length') {
      setValue(newValue);
      setErrorMessage(error.message);
    } else {
      setErrorMessage(error.message);
    }
  };

  return [value, updateValue, errorMessage];
}

export default useInput;
