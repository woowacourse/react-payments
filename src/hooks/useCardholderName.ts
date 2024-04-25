import { useState } from 'react';
import { validateCardholderName, validateEnglish } from '../validator/validateCardholderName';
import useInput from './useInput';
import { UseCardholderNameReturnType } from '../types/hooks';

const useCardholderName = (): UseCardholderNameReturnType => {
  const { value, setValue, errorInfo, setErrorInfo, updateErrorMessage } = useInput('', {
    onChange: validateEnglish,
    onBlur: validateCardholderName,
  });
  const [isEnter, setIsEnter] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validateEnglish(e.target.value);
    setErrorInfo({ ...validationResult });
    if (validationResult.isError) return;
    setValue(e.target.value.toUpperCase());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const errorStatus = updateErrorMessage();
      if (errorStatus.isError) return;
      setIsEnter(true);
    }
  };

  const handleBlur = () => {
    const errorStatus = updateErrorMessage();
    if (errorStatus.isError) return;
    setIsEnter(true);
  };

  return {
    value,
    handleChange,
    errorInfo,
    handleBlur,
    isEnter,
    handleKeyDown,
  };
};

export default useCardholderName;
