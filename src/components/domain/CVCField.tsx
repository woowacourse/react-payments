import type { CardInfo } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { ErrorStatus } from '../../types';
import { useEffect, useRef } from 'react';
import { validate, type ValidationRule } from '../../utils';
import { ERROR_MESSAGES } from '../../constants';

interface CVCFieldProps {
  value: CardInfo['cvc'];
  errorStatuses: [ErrorStatus];
  minLength: number;
  maxLength: number;
  onUpdated: (value: CardInfo['cvc']) => void;
  onErrorUpdated: (errorStatuses: [ErrorStatus]) => void;
  onValid: (value: CardInfo['cvc']) => void;
  validationRules: ValidationRule[];
}

export default function CVCField({
  value,
  errorStatuses,
  minLength,
  maxLength,
  onUpdated,
  onErrorUpdated,
  onValid,
  validationRules,
}: CVCFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const errorStatus = errorStatuses[0];

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = validate(validationRules, 'onChange', inputValue);
    onErrorUpdated([error as ErrorStatus]);
    if (error) return;

    onUpdated(inputValue);
    if (inputValue.length >= minLength) onValid(inputValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onErrorUpdated([validate(validationRules, 'onBlur', e.target.value) as ErrorStatus]);
  };

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: 'CVC 번호를 입력해 주세요',
    caption: '',
    error: !!errorStatus,
    errorMessage: errorStatus ? ERROR_MESSAGES[errorStatus] : '',
  };

  return (
    <FormField {...formFieldProps}>
      <label htmlFor="cvc">CVC</label>
      <Input
        ref={inputRef}
        variant={errorStatus !== null ? 'error' : 'default'}
        value={value}
        id="cvc"
        type="text"
        inputMode="numeric"
        placeholder="123"
        maxLength={maxLength}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FormField>
  );
}
