import { CVC_LENGTH, getErrorCvc, validateCvc } from '@/entities/card/cvc/model';
import { useInput } from '@/core/hooks/useInput';
import { isNumericString } from '@/core/utils/validator';

export interface UseCvcResult {
  value: string;
  isValid: boolean;
  errorMessage: string | undefined;
  maxLength: number;
  handleChange: (value: string) => void;
  handleBlur: () => void;
}

export const useCvc = (): UseCvcResult => {
  const cvc = useInput();

  const { value, touched, handleChange } = cvc;
  const isValid = validateCvc(value);

  const handleChangeCvc = (inputValue: string) => {
    if (inputValue !== '' && !isNumericString(inputValue)) return;
    handleChange(inputValue);
  };

  return {
    value,
    maxLength: CVC_LENGTH,
    isValid,
    errorMessage: touched ? getErrorCvc(value) : undefined,
    handleChange: handleChangeCvc,
    handleBlur: cvc.handleBlur,
  };
};
