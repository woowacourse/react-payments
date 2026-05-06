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

  const updateFormValue = (inputValue: string) => {
    onUpdated(inputValue);
  };

  const validates: { type: ('change' | 'blur')[]; rule: (inputValue: string) => boolean; errorStatus: ErrorStatus }[] =
    [
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const changeValidates = validates.filter((validate) => validate.type.includes('change'));
    const activeValidate = changeValidates.find((validate) => validate.rule(inputValue));

    setErrorStatus(activeValidate?.errorStatus ?? null);
    updateFormValue(inputValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const blurValidates = validates.filter((validate) => validate.type.includes('blur'));
    const activeValidate = blurValidates.find((validate) => validate.rule(inputValue));

    if (activeValidate) {
      setErrorStatus(activeValidate.errorStatus);
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
