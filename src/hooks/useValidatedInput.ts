import useInput from './useInput';
import useValidation from './useValidation';

interface useValidatedInputProps {
  defaultValue: string;
  message: string;
  validateFunction: (value: string) => boolean;
}

const useValidatedInput = ({ defaultValue, message, validateFunction }: useValidatedInputProps) => {
  const { value, onChange } = useInput(defaultValue);
  const { isValid, errorMessage } = useValidation({
    value,
    message,
    validateFunction,
  });

  return { value, onChange, isValid, errorMessage };
};

export default useValidatedInput;
