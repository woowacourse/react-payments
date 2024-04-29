import { useState } from 'react';
import { ErrorDetail } from '../types/error';
import { INITIAL_ERROR_VALUE } from '../constants/error';

interface ValidatorProps {
  onChange: (value: string) => ErrorDetail;
  onBlur: (value: string) => ErrorDetail;
}

const useError = (value: string, validator: ValidatorProps) => {
  const [errorInfo, setErrorInfo] = useState(INITIAL_ERROR_VALUE);

  const updateErrorMessage = () => {
    const validationResult = validator.onBlur(value);

    setErrorInfo({
      ...validationResult,
    });

    return validationResult;
  };

  return {
    errorInfo,
    setErrorInfo,
    updateErrorMessage,
  };
};

export default useError;
