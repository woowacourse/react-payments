import { useState } from 'react';
import { ErrorDetail } from '../components/types/error';
import { INITIAL_ERROR_VALUE } from '../constants/error';

const useInput = (initialValue = '', inquireValidity?: (value: string) => ErrorDetail) => {
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState(INITIAL_ERROR_VALUE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  };

  const updateErrorMessage = () => {
    if (inquireValidity) {
      const validationResult = inquireValidity(value);

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
