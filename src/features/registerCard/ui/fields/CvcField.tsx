import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useState } from 'react';
import { validateCvc } from '@/entities/card/model/cvc';
import { getCvcFieldState, isValidInputCvc } from '../../model/registerCvc';

export interface CvcFieldControl {
  cvc: string;
  onChange: (v: string) => void;
}

interface CvcFieldProps {
  cvcField: CvcFieldControl;
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplate: () => void;
}

export const CvcField = ({ cvcField, setStepRef, onComplate }: CvcFieldProps) => {
  const { cvc, onChange } = cvcField;
  const [touched, setTouched] = useState<boolean>(false);

  const { errorMessage, isValid, maxLength } = getCvcFieldState(cvc, touched);

  const handleChange = (inputValue: string): void => {
    if (!isValidInputCvc(inputValue)) return;

    onChange(inputValue);

    if (validateCvc(inputValue)) onComplate();
  };

  return (
    <Field title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={errorMessage}>
      <Input
        ref={setStepRef}
        type="text"
        inputMode="numeric"
        value={cvc}
        maxLength={maxLength}
        placeholder="123"
        isError={!isValid}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => setTouched(true)}
      />
    </Field>
  );
};
