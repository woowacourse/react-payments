import useInput from './useInput';
import { validateExpiryMonth, validateNumber } from '../validator/validateExpiryMonth';

const useExpiryMonth = () => {
  const { value, handleChange, errorInfo, updateErrorMessage } = useInput('', {
    onChange: validateNumber,
    onBlur: validateExpiryMonth,
  });

  return {
    value,
    handleChange,
    errorInfo,
    updateErrorMessage,
  };
};

export default useExpiryMonth;
