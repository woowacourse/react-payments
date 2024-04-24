import { validateCardholderName, validateEnglish } from '../validator/validateCardholderName';
import useInput from './useInput';

const useCardholderName = () => {
  const { value, setValue, errorInfo, setErrorInfo, updateErrorMessage } = useInput('', {
    onChange: validateEnglish,
    onBlur: validateCardholderName,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validateEnglish(e.target.value);
    setErrorInfo({ ...validationResult });
    if (validationResult.isError) return;
    setValue(e.target.value.toUpperCase());
  };

  return {
    value,
    handleChange,
    errorInfo,
    updateErrorMessage,
  };
};

export default useCardholderName;
