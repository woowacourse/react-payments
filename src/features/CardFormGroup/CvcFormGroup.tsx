import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';
import { validateCvc, validateCvcFormat, CVC_LENGTH } from '@/entities/card/cvc';
import { useState } from 'react';

interface CvcFormGroupProps {
  cvc: string;
  handleChangeCvc: (value: string) => void;
}

export const CvcFormGroup = ({ cvc, handleChangeCvc: onChangeCvc }: CvcFormGroupProps) => {
  const [error, setError] = useState<string | undefined>();

  const handleChange = (value: string) => {
    const error = validateCvcFormat(value);
    setError(error);
    if (error) return;
    onChangeCvc(value);
  };

  const handleBlur = () => {
    setError(validateCvc(cvc));
  };

  return (
    <FormGroup title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={error}>
      <Input
        type="text"
        inputMode="numeric"
        value={cvc}
        maxLength={CVC_LENGTH}
        placeholder="123"
        isError={error !== undefined}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
      />
    </FormGroup>
  );
};
