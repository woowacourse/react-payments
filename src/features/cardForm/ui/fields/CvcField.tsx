import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useState } from 'react';
import { CVC_LENGTH } from '@/entities/card';
import { getErrorCvc, validateCvc } from '@/entities/card/lib/validatorCvc';

interface CvcFieldProps {
  cvc: string;
  setStepRef: (node: HTMLInputElement | null) => void;
  handleChange: (value: string) => void;
}

export const CvcField = ({ cvc, handleChange, setStepRef }: CvcFieldProps) => {
  const [touched, setTouched] = useState<boolean>(false);

  const handleChangeCvc = (inputValue: string): void => {
    handleChange(inputValue);
    setTouched(false);
  };

  const handleBlur = () => {
    setTouched(true);
  };
  const error = validateCvc(cvc);

  return (
    <Field title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={getErrorCvc(cvc)}>
      <Input
        ref={(node) => setStepRef(node)}
        type="text"
        inputMode="numeric"
        value={cvc}
        maxLength={CVC_LENGTH}
        placeholder="123"
        isError={touched && !error}
        onChange={(e) => handleChangeCvc(e.target.value)}
        onBlur={() => handleBlur()}
      />
    </Field>
  );
};
