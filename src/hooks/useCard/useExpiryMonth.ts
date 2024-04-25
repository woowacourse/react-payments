import useInput from '../useInput';
import validateExpiryMonth from '../../validator/validateExpiryMonth';
import validateNumber from '../../validator/validateNumber';
import { UseExpiryDateReturnType } from '../../types/hooks';

const useExpiryMonth = (): UseExpiryDateReturnType => {
  const { value, handleChange, errorInfo, updateErrorMessage, inputRef } = useInput('', {
    onChange: validateNumber,
    onBlur: validateExpiryMonth,
  });

  return {
    value,
    handleChange,
    errorInfo,
    updateErrorMessage,
    inputRef,
  };
};

export default useExpiryMonth;
