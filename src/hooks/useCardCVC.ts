import useInput from './useInput';
import validateNumber from '../validator/validateNumber';
import validateCVC from '../validator/validateCVC';
import { useState } from 'react';
import { UseCVCReturnType } from '../types/hooks';

const useCardCVC = (): UseCVCReturnType => {
  const { value, setValue, errorInfo, setErrorInfo, updateErrorMessage } = useInput('', {
    onChange: validateNumber,
    onBlur: validateCVC,
  });
  const [isCardFront, setIsCardFront] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onChangeValidationResult = validateNumber(e.target.value);
    setErrorInfo({ ...onChangeValidationResult });
    if (onChangeValidationResult.isError) return;
    setValue(e.target.value);
  };

  const handleBlur = () => {
    updateErrorMessage();
    setIsCardFront(true);
  };

  return {
    value,
    handleChange,
    errorInfo,
    handleBlur,
    isCardFront,
    setIsCardFront,
  };
};

export default useCardCVC;
