import { isNumericString } from '@/core/utils/validator';
import { PASSWORD_LENGTH, validatePassword } from '@/entities/card/password';
import { useInput } from '@/core/hooks/useInput';

export interface UsePasswordResult {
  value: string;
  isValid: boolean;
  errorMessage: string | undefined;
  maxLength: number;
  handleChange: (value: string) => void;
  handleBlur: () => void;
}

export const usePassword = ({ onComplete }: { onComplete: () => void }): UsePasswordResult => {
  const password = useInput({ validator: isNumericString });

  const { value, touched } = password;
  const error = validatePassword(value);

  const handleChangeCvc = (inputValue: string): void => {
    password.handleChange(inputValue);
    if (validatePassword(inputValue)) onComplete();
  };

  return {
    value,
    maxLength: PASSWORD_LENGTH,
    isValid: !error,
    errorMessage: touched ? error : undefined,
    handleChange: handleChangeCvc,
    handleBlur: password.handleBlur,
  };
};
