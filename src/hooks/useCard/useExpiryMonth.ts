import useInput from '../useInput';
import validateExpiryMonth from '../../validator/validateExpiryMonth';
import validateNumber from '../../validator/validateNumber';
import { UseExpiryDateReturnType } from '../../types/hooks';
import { useRef } from 'react';

const useExpiryMonth = (): UseExpiryDateReturnType => {
  const { value, setValue, errorInfo, setErrorInfo, updateErrorMessage } = useInput('', {
    onChange: validateNumber,
    onBlur: validateExpiryMonth,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onChangeValidationResult = validateNumber(e.target.value);
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
    const validationResult = validateExpiryMonth(value);
    setErrorInfo({ ...validationResult });
    setValue(value);
    return validationResult;
  };

  return {
    value,
    handleChange,
    errorInfo,
    updateErrorMessage,
    inputRef,
  };
};

export default useExpiryMonth;
