import type { CardInfo, ErrorStatus } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import { PASSWORD_LENGTH, ERROR_MESSAGES } from '../../constants';
import { useEffect, useEffectEvent } from 'react';
import { sanitizeNumber } from '../../utils';
import { validates } from '../../validates.ts';

interface PasswordFieldProps {
  value: CardInfo['password'];
  errorStatus: ErrorStatus;
  setFieldValue: (field: 'password', value: string) => void;
  setFieldError: (field: 'password', error: ErrorStatus) => void;
  onCompleted: () => void;
}

export default function PasswordField({
  value,
  errorStatus,
  setFieldValue,
  setFieldError,
  onCompleted,
}: PasswordFieldProps) {
  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!errorStatus && value.length === PASSWORD_LENGTH) {
      onCompletedEvent();
    }
  }, [errorStatus, value]);

  const validate = (eventType: 'change' | 'blur', inputValue: string) => {
    if (validates['required'](inputValue)) {
      return 'required';
    }

    if (eventType === 'change' && validates['numberOnly'](inputValue)) {
      return 'numberOnly';
    }

    if (eventType === 'blur' && validates['invalidLength'](inputValue, PASSWORD_LENGTH)) {
      return 'invalidLength';
    }

    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = validate('change', inputValue);

    setFieldError('password', error);
    setFieldValue('password', sanitizeNumber(inputValue));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = validate('blur', inputValue);

    if (error) {
      setFieldError('password', error);
    }
  };

  const formFieldProps: Omit<FormFieldProps, 'children'> = {
    title: '비밀번호를 입력해 주세요',
    caption: '앞의 2자리를 입력해주세요',
    error: !!errorStatus,
    errorMessage: errorStatus ? ERROR_MESSAGES[errorStatus] : '',
  };

  return (
    <FormField {...formFieldProps}>
      <label htmlFor="password">비밀번호 앞 2자리</label>
      <Input
        autoFocus
        name="password"
        variant={errorStatus !== null ? 'error' : 'default'}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        inputMode="numeric"
        placeholder="**"
        maxLength={PASSWORD_LENGTH}
      />
    </FormField>
  );
}
