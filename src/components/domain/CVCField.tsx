import type { CardInfo, ErrorStatus, Validate } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import { CVC_LENGTH, ERROR_MESSAGES } from '../../constants';
import { useEffect, useEffectEvent } from 'react';
import { getActiveError, isNumber, sanitizeNumber } from '../../utils';

interface CVCFieldProps {
  value: CardInfo['cvc'];
  errorStatus: ErrorStatus;
  setFieldValue: (field: 'cvc', value: string) => void;
  setFieldError: (field: 'cvc', error: ErrorStatus) => void;
  onCompleted: () => void;
}

const rules: Validate<ErrorStatus>[] = [
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

export default function CVCField({ value, errorStatus, setFieldValue, setFieldError, onCompleted }: CVCFieldProps) {
  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!errorStatus && value.length === CVC_LENGTH) {
      onCompletedEvent();
    }
  }, [errorStatus, value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = getActiveError(rules, inputValue, 'change');

    setFieldError('cvc', error);
    setFieldValue('cvc', sanitizeNumber(inputValue));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = getActiveError(rules, inputValue, 'blur');

    if (error) {
      setFieldError('cvc', error);
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
        autoFocus
        name="cvc"
        variant={errorStatus !== null ? 'error' : 'default'}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        id="cvc"
        type="text"
        inputMode="numeric"
        placeholder="123"
        maxLength={CVC_LENGTH}
      />
    </FormField>
  );
}
