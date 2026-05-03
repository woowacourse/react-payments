import type { CardInfo } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import { useState } from 'react';
import type { ErrorStatus } from '../../types';
import { isNumber } from '../../utils';
import { CVC_LENGTH, ERROR_MESSAGES } from '../../constants';

interface CVCFieldProps {
  value: CardInfo['cvc'];
  onUpdated: (value: CardInfo['cvc']) => void;
}

export default function CVCField({ value, onUpdated }: CVCFieldProps) {
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

    if (inputValue.length < CVC_LENGTH) {
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

    if (inputValue.length < CVC_LENGTH) {
      setErrorStatus('invalidLength');
      return;
    }
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
        variant={errorStatus !== null ? 'error' : 'default'}
        value={value}
        id="cvc"
        type="text"
        inputMode="numeric"
        placeholder="123"
        maxLength={CVC_LENGTH}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FormField>
  );
}
