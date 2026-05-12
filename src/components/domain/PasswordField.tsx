import type { CardInfo } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import type { ErrorStatus } from '../../types';
import { useEffect, useRef } from 'react';
import { validate, type ValidationRule } from '../../utils';
import { PASSWORD_LENGTH, ERROR_MESSAGES } from '../../constants';

interface PasswordFieldProps {
  value: CardInfo['password'];
  errorStatuses: [ErrorStatus];
  onUpdated: (value: CardInfo['password']) => void;
  onErrorUpdated: (errorStatuses: [ErrorStatus]) => void;
  validationRules: ValidationRule[];
}

export default function PasswordField({
  value,
  errorStatuses,
  onUpdated,
  onErrorUpdated,
  validationRules,
}: PasswordFieldProps) {
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
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onErrorUpdated([validate(validationRules, 'onBlur', e.target.value) as ErrorStatus]);
  };

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '비밀번호를 입력해 주세요',
    caption: `앞의 ${PASSWORD_LENGTH}자리를 입력해주세요`,
    error: !!errorStatus,
    errorMessage: errorStatus ? ERROR_MESSAGES[errorStatus] : '',
  };

  return (
    <FormField {...formFieldProps}>
      <label htmlFor="password">비밀번호 앞 {PASSWORD_LENGTH}자리</label>
      <Input
        ref={inputRef}
        variant={errorStatus !== null ? 'error' : 'default'}
        value={value}
        id="password"
        type="password"
        placeholder="••"
        inputMode="numeric"
        maxLength={PASSWORD_LENGTH}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FormField>
  );
}
