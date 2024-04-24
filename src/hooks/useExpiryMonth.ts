import useInput from './useInput';
import validateExpiryMonth from '../validator/validateExpiryMonth';
import validateNumber from '../validator/validateNumber';

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
