import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import type { UseCvcResult } from '../../hooks/useCvc';

interface CvcFieldProps {
  cvc: UseCvcResult;
  setStepRef: (node: HTMLInputElement | null) => void;
}

export const CvcField = ({ cvc, setStepRef }: CvcFieldProps) => {
  const { value, maxLength, errorMessage, handleChange, handleBlur } = cvc;

  return (
    <Field title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={errorMessage}>
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
    </Field>
  );
};
