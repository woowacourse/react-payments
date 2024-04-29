import { useState } from 'react';
import { ErrorDetail } from '../types/error';
import useError from './useError';

interface ValidatorProps {
  onChange: (value: string) => ErrorDetail;
  onBlur: (value: string) => ErrorDetail;
}

const useInput = (initialValue = '', validator: ValidatorProps) => {
  const [value, setValue] = useState(initialValue);
  const { errorInfo, setErrorInfo, updateErrorMessage } = useError(value, validator);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onChangeValidationResult = validator.onChange(e.target.value);
    setErrorInfo({ ...onChangeValidationResult });
    if (onChangeValidationResult.isError) return;
    setValue(e.target.value);
  };

  return {
    value,
    setValue,
    handleChange,
    errorInfo,
    setErrorInfo,
    updateErrorMessage,
  };
};

export default useInput;
