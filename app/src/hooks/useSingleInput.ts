import { useState } from 'react';
import { type ValidationResult } from '../validators/CardValidator';

export function useSingleInput(
  setValue: (value: string) => void,
  onChangeValidator: (value: string) => ValidationResult,
  onBlurValidator: (value: string, maxLength: number) => ValidationResult,
) {
  const [fieldErrors, setError] = useState({
    state: false,
    message: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const result = onChangeValidator(value);
    if (!result.valid) {
      console.log(value);
      setError({ state: true, message: result.message });
      return;
    }

    setError({ state: false, message: '' });
    setValue(value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, maxLength } = e.target;

    const result = onBlurValidator(value, maxLength);
    if (!result.valid) {
      setError({ state: true, message: result.message });
      return;
    }

    setError({ state: false, message: '' });
  };

  return { fieldErrors, onChange, onBlur };
}
