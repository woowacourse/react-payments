import { isNumericString } from '@/core/utils/validator';
import { CVC_LENGTH, validateCvc } from '@/entities/card/cvc';
import { useInput } from '@/core/hooks/useInput';

export interface UseCvcResult {
  value: string;
  isValid: boolean;
  errorMessage: string | undefined;
  maxLength: number;
  handleChange: (value: string) => void;
  handleBlur: () => void;
}

export const useCvc = ({ onComplete }: { onComplete: () => void }): UseCvcResult => {
  const cvc = useInput({ validator: isNumericString });

  const { value, touched } = cvc;
  const error = validateCvc(value);

  const handleChangeCvc = (inputValue: string): void => {
    cvc.handleChange(inputValue);
    if (validateCvc(inputValue) === undefined) onComplete();
  };

  return {
    value,
    maxLength: CVC_LENGTH,
    isValid: !error,
    errorMessage: touched ? error : undefined,
    handleChange: handleChangeCvc,
    handleBlur: cvc.handleBlur,
  };
};
