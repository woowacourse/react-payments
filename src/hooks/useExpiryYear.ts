import useInput from './useInput';
import validateExpiryYear from '../validator/validateExpiryYear';
import validateNumber from '../validator/validateNumber';

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
