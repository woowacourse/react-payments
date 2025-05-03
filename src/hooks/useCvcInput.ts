import { useMemo, useState } from 'react';
import { validateNumberError, validateCvcLengthError } from '../utils/cardInputValidations';

export function useCvcInput() {
  const [cvc, setCvc] = useState<string>('');

  const cvcError = useMemo(() => {
    const numError = validateNumberError(cvc);
    if (numError) return numError;

    const cvcLengthError = validateCvcLengthError(cvc);
    if (cvcLengthError) return cvcLengthError;

    return '';
  }, [cvc]);

  const handleCvcChange = (_: string, value: string) => {
    setCvc(value);
  };

  return { cvc, handleCvcChange, cvcError };
}
