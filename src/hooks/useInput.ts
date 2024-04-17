import React, { useCallback, useState } from 'react';

const REGEX_TABLE: Record<InputType, RegExp> = {
  text: /^.*$/,
  english: /^[a-zA-Z]*$/,
  number: /^[0-9]*$/,
} as const;

const ERROR_TABLE: Record<InputType, string> = {
  text: '',
  english: '영어만 입력 가능합니다.',
  number: '숫자만 입력 가능합니다.',
};

const useInput = (maxLength: number, inputType: InputType) => {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (
      newValue.length <= maxLength &&
      !REGEX_TABLE[inputType].test(newValue)
    ) {
      setHasError(true);
      setValue(newValue.slice(0, newValue.length - 1));
      setErrorMessage(ERROR_TABLE[inputType]);
    } else if (newValue.length > maxLength) {
      setHasError(false);
      setValue(newValue.slice(0, maxLength));
    } else {
      setHasError(false);
      setValue(newValue);
    }
  }, []);

  return [value, onChange, hasError, errorMessage] as const;
};

export default useInput;
