import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';
import { useField } from '@/core/hooks/useField';
import { validateCvc, validateCvcFormat, CVC_LENGTH } from '@/entities/card/cvc';

export const CvcFormGroup = () => {
  const useCvc = useField({
    validateFormat: validateCvcFormat,
    validateComplete: validateCvc,
  });

  const { value, error, handleChange, handleBlur } = useCvc;

  return (
    <FormGroup title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={error}>
      <Input
        type="text"
        inputMode="numeric"
        value={value}
        maxLength={CVC_LENGTH}
        placeholder="123"
        isError={error !== undefined}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
      />
    </FormGroup>
  );
};
