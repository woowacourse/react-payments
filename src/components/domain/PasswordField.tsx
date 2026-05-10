import type { CardInfo, ErrorStatus } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import { PASSWORD_LENGTH, ERROR_MESSAGES } from '../../constants';
import { useEffect, useEffectEvent } from 'react';

interface PasswordFieldProps {
  value: CardInfo['password'];
  errorStatus: ErrorStatus;
  onCompleted: () => void;
}

// TODO: useStep? 훅 필요성 고민
export default function PasswordField({ value, errorStatus, onCompleted }: PasswordFieldProps) {
  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!errorStatus && value.length === PASSWORD_LENGTH) {
      onCompletedEvent();
    }
  }, [errorStatus, value]);

  // TODO: 도메인 form field props 타입 추출 (Omit children 반복)
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
        id="password"
        type="password"
        inputMode="numeric"
        placeholder="**"
        maxLength={PASSWORD_LENGTH}
      />
    </FormField>
  );
}
