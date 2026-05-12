import type { CardBrand, CardInfo, ErrorStatus } from '../../types';
import FormField, { type FormFieldProps } from '../ui/FormField';
import Input from '../ui/Input';
import { AMEX_CVC_LENGTH, CVC_LENGTH, ERROR_MESSAGES } from '../../constants';
import { useEffect, useEffectEvent } from 'react';
import { sanitizeNumber } from '../../utils';
import { validates } from '../../validates.ts';

interface CVCFieldProps {
  value: CardInfo['cvc'];
  cardBrand: CardBrand;
  errorStatus: ErrorStatus;
  setFieldValue: (field: 'cvc', value: string) => void;
  setFieldError: (field: 'cvc', error: ErrorStatus) => void;
  onCompleted: () => void;
}

export default function CVCField({
  value,
  cardBrand,
  errorStatus,
  setFieldValue,
  setFieldError,
  onCompleted,
}: CVCFieldProps) {
  const cvcLength = cardBrand === 'amex' ? AMEX_CVC_LENGTH : CVC_LENGTH;
  const onCompletedEvent = useEffectEvent(onCompleted);

  useEffect(() => {
    if (!errorStatus && value.length === cvcLength) {
      onCompletedEvent();
    }
  }, [errorStatus, value, cvcLength]);

  const validate = (eventType: 'change' | 'blur', inputValue: string) => {
    if (validates['required'](inputValue)) {
      return 'required';
    }

    if (eventType === 'change' && validates['numberOnly'](inputValue)) {
      return 'numberOnly';
    }

    if (eventType === 'blur' && validates['invalidLength'](inputValue, cvcLength)) {
      return 'invalidLength';
    }

    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = validate('change', inputValue);

    setFieldError('cvc', error);
    setFieldValue('cvc', sanitizeNumber(inputValue));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const error = validate('blur', inputValue);

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
        maxLength={cvcLength}
      />
    </FormField>
  );
}
