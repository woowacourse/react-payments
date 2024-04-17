import React, { useCallback, useState } from 'react';

const REGEX_TABLE: Record<InputType, RegExp> = {
  text: /^.*$/,
  english: /^[a-zA-Z]*$/,
  number: /^[0-9]*$/,
} as const;

const useInput = (maxLength: number, inputType: InputType) => {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (
      newValue.length <= maxLength &&
      !REGEX_TABLE[inputType].test(newValue)
    ) {
      setHasError(true);
      setValue(newValue.slice(0, newValue.length - 1));
    } else if (newValue.length > maxLength) {
      setHasError(false);
      setValue(newValue.slice(0, maxLength));
    } else {
      setHasError(false);
      setValue(newValue);
    }
  }, []);

  return [value, onChange, hasError] as const;
};

export default useInput;
