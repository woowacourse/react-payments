import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useState } from 'react';
import { validateCvc } from '@/entities/card/model/cvc';
import type { FieldControl } from '../../model/payments';
import { getCvcFieldState, isValidInputCvc } from '../../model/registerCvc';

interface CvcFieldProps {
  cvcField: FieldControl;
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplate: () => void;
}

export const CvcField = ({ cvcField, setStepRef, onComplate }: CvcFieldProps) => {
  const { value, handleChange } = cvcField;
  const [touched, setTouched] = useState<boolean>(false);

  const { errorMessage, isError, maxLength } = getCvcFieldState({
    value,
    touched,
  });

  const handleChangeCvc = (inputValue: string): void => {
    if (!isValidInputCvc(inputValue)) return;

    handleChange(inputValue);

    if (validateCvc(inputValue)) onComplate();
  };

  return (
    <Field title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={errorMessage}>
      <Input
        ref={setStepRef}
        type="text"
        inputMode="numeric"
        value={value}
        maxLength={maxLength}
        placeholder="123"
        isError={isError}
        onChange={(e) => handleChangeCvc(e.target.value)}
        onBlur={() => setTouched(true)}
      />
    </Field>
  );
};
