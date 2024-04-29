import useInput from '../useInput';
import validateExpiryYear from '../../validator/validateExpiryYear';
import validateNumber from '../../validator/validateNumber';
import { UseExpiryDateReturnType } from '../../types/hooks';

const useExpiryYear = (): UseExpiryDateReturnType => {
  const { value, setValue, errorInfo, setErrorInfo, updateErrorMessage } = useInput('', {
    onChange: validateNumber,
    onBlur: validateExpiryYear,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onChangeValidationResult = validateNumber(e.target.value);
    if (e.target.value.length === e.target.maxLength && !onChangeValidationResult.isError) {
      const onBlurValidationResult = validateLastInput(e.target.value);
      if (onBlurValidationResult.isError) return;
    }

    setErrorInfo({ ...onChangeValidationResult });
    if (onChangeValidationResult.isError) return;
    setValue(e.target.value);
  };

  const validateLastInput = (value: string) => {
    const validationResult = validateExpiryYear(value);
    setErrorInfo({ ...validationResult });
    setValue(value);
    return validationResult;
  };

  return {
    value,
    handleChange,
    errorInfo,
    updateErrorMessage,
  };
};

export default useExpiryYear;
