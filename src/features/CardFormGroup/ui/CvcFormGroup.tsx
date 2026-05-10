import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';
import type { UseCvcResult } from '../hooks/useCvc';

interface CvcFormGroupProps {
  cvc: UseCvcResult;
  setStepRef: (node: HTMLInputElement | null) => void;
}

export const CvcFormGroup = ({ cvc, setStepRef }: CvcFormGroupProps) => {
  const { value, maxLength, errorMessage, handleChange, handleBlur } = cvc;
  return (
    <FormGroup title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={errorMessage}>
      <Input
        ref={(node) => setStepRef(node)}
        type="text"
        inputMode="numeric"
        value={value}
        maxLength={maxLength}
        placeholder="123"
        isError={errorMessage !== undefined}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => handleBlur()}
      />
    </FormGroup>
  );
};
