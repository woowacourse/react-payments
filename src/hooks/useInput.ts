import { useRef, useState } from 'react';
import { ErrorDetail } from '../types/error';
import useError from './useError';

interface ValidatorProps {
  onChange: (value: string) => ErrorDetail;
  onBlur: (value: string) => ErrorDetail;
}

const useInput = (initialValue = '', validator: ValidatorProps) => {
  const [value, setValue] = useState(initialValue);
  const { errorInfo, setErrorInfo, updateErrorMessage } = useError(value, validator);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onChangeValidationResult = validator.onChange(e.target.value);
    if (e.target.value.length === e.target.maxLength && !onChangeValidationResult.isError) {
      const onBlurValidationResult = validateLastInput(e.target.value);
      if (onBlurValidationResult.isError) return;
      if (inputRef.current?.nextSibling) {
        (inputRef.current?.nextSibling as HTMLInputElement).focus();
      }
    }

    setErrorInfo({ ...onChangeValidationResult });
    if (onChangeValidationResult.isError) return;
    setValue(e.target.value);
  };

  const validateLastInput = (value: string) => {
    const validationResult = validator.onBlur(value);
    setErrorInfo({ ...validationResult });
    setValue(value);
    return validationResult;
  };

  return {
    value,
    setValue,
    handleChange,
    errorInfo,
    setErrorInfo,
    updateErrorMessage,
    inputRef,
  };
};

export default useInput;
