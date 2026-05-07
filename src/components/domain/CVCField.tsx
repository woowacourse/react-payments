import type { CardInfo, ErrorStatus, Validate } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import { isNumber, sanitizeNumber } from '../../utils';
import { CVC_LENGTH, ERROR_MESSAGES } from '../../constants';
import { useErrorStatus } from '../../hooks/useErrorStatus.ts';
import { useEffect, useEffectEvent } from 'react';

interface CVCFieldProps {
  value: CardInfo['cvc'];
  onUpdated: (value: CardInfo['cvc']) => void;
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
    rule: (inputValue: string) => inputValue.length < CVC_LENGTH,
    errorStatus: 'invalidLength',
  },
];

export default function CVCField({ value, onUpdated, onCompleted }: CVCFieldProps) {
  const { errorStatus, onChange, onBlur } = useErrorStatus(validates);
  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!errorStatus && value.length === CVC_LENGTH) {
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
