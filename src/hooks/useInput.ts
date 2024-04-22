import { useState } from 'react';
import { ErrorDetail } from '../components/types/error';
import { INITIAL_ERROR_VALUE } from '../constants/error';

const useInput = (initialValue = '', validate?: (value: string) => ErrorDetail) => {
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState(INITIAL_ERROR_VALUE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  const updateErrorMessage = () => {
    if (validate) {
      const validationResult = validate(value);

      setErrorInfo({
        ...validationResult,
      });
    }
  };

  return {
    value,
    setValue,
    handleChange,
    updateErrorMessage,
    errorInfo,
  };
};

export default useInput;
