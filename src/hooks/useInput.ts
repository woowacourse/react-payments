import { useState } from 'react';
import { ErrorDetail } from '../types/error';
import useError from './useError';

interface ValidateProps {
  onChange: (value: string) => ErrorDetail;
  onBlur: (value: string) => ErrorDetail;
}

const useInput = (initialValue = '', validate: ValidateProps) => {
  const [value, setValue] = useState(initialValue);
  const { errorInfo, setErrorInfo, updateErrorMessage } = useError(value, validate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validate.onChange(e.target.value);
    setErrorInfo({ ...validationResult });
    if (validationResult.isError) return;
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
