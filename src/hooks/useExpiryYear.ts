import useInput from './useInput';
import { validateExpiryYear, validateNumber } from '../validator/validateExpiryYear';

const useExpiryYear = () => {
  const { value, handleChange, errorInfo, updateErrorMessage } = useInput('', {
    onChange: validateNumber,
    onBlur: validateExpiryYear,
  });

  return {
    value,
    handleChange,
    errorInfo,
    updateErrorMessage,
  };
};

export default useExpiryYear;
