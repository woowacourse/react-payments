import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useState } from 'react';
import { CVC_LENGTH } from '@/entities/card';
import { getErrorCvc, validateCvc } from '@/entities/card/model/cvc';
import { isNumericString } from '@/core/utils/validator';
import type { FieldControl } from '../../model/payments';

interface CvcFieldProps {
  cvcField: FieldControl;
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplate: () => void;
}

export const CvcField = ({ cvcField, setStepRef, onComplate }: CvcFieldProps) => {
  const { handleChange, value } = cvcField;
  const [touched, setTouched] = useState<boolean>(false);
  const handleChangeCvc = (inputValue: string): void => {
    if (inputValue !== '' && !isNumericString(inputValue)) return;
    handleChange(inputValue);
    setTouched(false);

    if (validateCvc(inputValue)) onComplate();
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const error = !validateCvc(value);
  const errorMessage = touched ? getErrorCvc(value) : undefined;

  return (
    <Field title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={errorMessage}>
      <Input
        ref={setStepRef}
        type="text"
        inputMode="numeric"
        value={value}
        maxLength={CVC_LENGTH}
        placeholder="123"
        isError={touched && error}
        onChange={(e) => handleChangeCvc(e.target.value)}
        onBlur={() => handleBlur()}
      />
    </Field>
  );
};
