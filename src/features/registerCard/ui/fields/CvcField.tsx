import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useState } from 'react';
import { getCvcFieldState, isValidInputCvc } from '../../model/registerCvc';

export interface CvcFieldControl {
  cvc: string;
  shouldComplete: (value: string) => boolean;
  onChange: (v: string) => void;
}

export interface CvcFieldProps extends CvcFieldControl {
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplete: () => void;
  serverErrorMessage?: string;
}

export const CvcField = ({
  cvc,
  serverErrorMessage,
  shouldComplete,
  onChange,
  setStepRef,
  onComplete,
}: CvcFieldProps) => {
  const [touched, setTouched] = useState<boolean>(false);

  const { errorMessage, maxLength } = getCvcFieldState(cvc, touched);
  const visibleErrorMessage = serverErrorMessage ?? errorMessage;

  const handleChange = (inputValue: string): void => {
    if (!isValidInputCvc(inputValue)) return;
    onChange(inputValue);

    if (shouldComplete(inputValue)) {
      onComplete();
    }
  };

  return (
    <Field title="CVC 번호를 입력해 주세요" label="CVC" errorMessage={visibleErrorMessage}>
      <Input
        ref={setStepRef}
        type="text"
        inputMode="numeric"
        value={cvc}
        maxLength={maxLength}
        placeholder="123"
        isError={visibleErrorMessage !== undefined}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => setTouched(true)}
      />
    </Field>
  );
};
