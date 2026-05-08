import type { CardInfo, ErrorStatus, Validate } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import { isNumber, sanitizeNumber } from '../../utils';
import { PASSWORD_LENGTH, ERROR_MESSAGES } from '../../constants';
import { useErrorStatus } from '../../hooks/useErrorStatus.ts';
import { useEffect, useEffectEvent } from 'react';

interface PasswordFieldProps {
  value: CardInfo['password'];
  onUpdated: (value: CardInfo['password']) => void;
  onCompleted: () => void;
}

const validates: Validate<ErrorStatus>[] = [
  {
    type: ['change', 'blur'],
    rule: (inputValue: string) => inputValue === '',
    errorStatus: 'required',
  },
  {
    type: ['change'],
    rule: (inputValue: string) => !isNumber(inputValue),
    errorStatus: 'numberOnly',
  },
  {
    type: ['blur'],
    rule: (inputValue: string) => inputValue.length < PASSWORD_LENGTH,
    errorStatus: 'invalidLength',
  },
];

export default function PasswordField({ value, onUpdated, onCompleted }: PasswordFieldProps) {
  const { errorStatus, onChange, onBlur } = useErrorStatus(validates);
  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!errorStatus && value.length === PASSWORD_LENGTH) {
      onCompletedEvent();
    }
  }, [errorStatus, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const sanitizedValue = sanitizeNumber(inputValue);

    onChange(e);
    onUpdated(sanitizedValue);
  };

  const handleBlur = onBlur;

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
        variant={errorStatus !== null ? 'error' : 'default'}
        value={value}
        id="password"
        type="password"
        inputMode="numeric"
        placeholder="**"
        maxLength={PASSWORD_LENGTH}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FormField>
  );
}
