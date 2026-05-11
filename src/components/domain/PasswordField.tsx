import type { CardInfo } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import { useState } from 'react';
import type { ErrorStatus } from '../../types';
import { isNumber } from '../../utils';
import { PASSWORD_LENGTH, ERROR_MESSAGES } from '../../constants';

interface PasswordFieldProps {
  value: CardInfo['password'];
  onUpdated: (value: CardInfo['password']) => void;
}

export default function PasswordField({ value, onUpdated }: PasswordFieldProps) {
  const [errorStatus, setErrorStatus] = useState<ErrorStatus>(null);

  // 입력 또는 삭제할 때마다 수행되어야하는 validation 수행.
  // 1. required
  // 2. numberOnly -> update 제외됨.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue !== '' && !isNumber(inputValue)) {
      setErrorStatus('numberOnly');
      return;
    }

    const newValue = inputValue;
    onUpdated(newValue);
    setErrorStatus(inputValue === '' ? 'required' : null);

    if (inputValue.length < PASSWORD_LENGTH) {
      return;
    }
  };

  // 포커스가 빠질때마다 수행되어야 하는 validation 수행.
  // 1. required
  // 2. invalidLength
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      setErrorStatus('required');
      return;
    }

    if (inputValue.length < PASSWORD_LENGTH) {
      setErrorStatus('invalidLength');
      return;
    }

    setErrorStatus(null);
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
