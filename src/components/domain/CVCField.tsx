import type { CardInfo, ErrorStatus } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import { CVC_LENGTH, ERROR_MESSAGES } from '../../constants';
import { useEffect, useEffectEvent } from 'react';

interface CVCFieldProps {
  value: CardInfo['cvc'];
  errorStatus: ErrorStatus;
  onCompleted: () => void;
}

export default function CVCField({ value, errorStatus, onCompleted }: CVCFieldProps) {
  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!errorStatus && value.length === CVC_LENGTH) {
      onCompletedEvent();
    }
  }, [errorStatus, value]);

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
        autoFocus
        name="cvc"
        variant={errorStatus !== null ? 'error' : 'default'}
        value={value}
        id="cvc"
        type="text"
        inputMode="numeric"
        placeholder="123"
        maxLength={CVC_LENGTH}
      />
    </FormField>
  );
}
