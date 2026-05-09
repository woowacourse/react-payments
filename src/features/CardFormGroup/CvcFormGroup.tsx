import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';
import { CVC_LENGTH } from '@/entities/card/cvc';

import type { UseFieldResult } from '@/core/hooks/useField';

interface CvcFormGroupProps {
  cvc: UseFieldResult;
}

export const CvcFormGroup = ({ cvc }: CvcFormGroupProps) => {
  return (
    <FormGroup title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={cvc.error}>
      <Input
        type="text"
        inputMode="numeric"
        value={cvc.value}
        maxLength={CVC_LENGTH}
        placeholder="123"
        isError={cvc.error !== undefined}
        onChange={(e) => cvc.handleChange(e.target.value)}
        onBlur={cvc.handleBlur}
      />
    </FormGroup>
  );
};
