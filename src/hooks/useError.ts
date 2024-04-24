import { useState } from 'react';
import { ErrorDetail } from '../types/error';
import { INITIAL_ERROR_VALUE } from '../constants/error';

interface ValidateProps {
  onChange: (value: string) => ErrorDetail;
  onBlur: (value: string) => ErrorDetail;
}

const useError = (value: string, validate: ValidateProps) => {
  const [errorInfo, setErrorInfo] = useState(INITIAL_ERROR_VALUE);

  const updateErrorMessage = () => {
    if (validate) {
      const validationResult = validate.onBlur(value);

      setErrorInfo({
        ...validationResult,
      });
    }
  };

  return {
    errorInfo,
    setErrorInfo,
    updateErrorMessage,
  };
};

export default useError;
