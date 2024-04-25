import useInput from '../useInput';
import validateExpiryYear from '../../validator/validateExpiryYear';
import validateNumber from '../../validator/validateNumber';
import { UseExpiryDateReturnType } from '../../types/hooks';

const useExpiryYear = (): UseExpiryDateReturnType => {
  const { value, handleChange, errorInfo, updateErrorMessage, inputRef } = useInput('', {
    onChange: validateNumber,
    onBlur: validateExpiryYear,
  });

  return {
    value,
    handleChange,
    errorInfo,
    updateErrorMessage,
    inputRef,
  };
};

export default useExpiryYear;
