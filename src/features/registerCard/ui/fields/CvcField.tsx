import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useState } from 'react';
import { getCvcFieldState, isValidInputCvc } from '../../model/registerCvc';
import type { FieldServerError } from '../../model/registerCardForm';

export interface CvcFieldControl {
  cvc: string;
  shouldComplete: (value: string) => boolean;
  onChange: (v: string) => void;
}

export interface CvcFieldProps extends CvcFieldControl {
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplete: () => void;
  serverError?: FieldServerError;
}

export const CvcField = ({
  cvc,
  shouldComplete,
  onChange,
  setStepRef,
  onComplete,
  serverError,
}: CvcFieldProps) => {
  const [touched, setTouched] = useState<boolean>(false);

  const { errorMessage, maxLength } = getCvcFieldState(cvc, touched);
  const visibleErrorMessage = serverError?.message ?? errorMessage;

  const handleChange = (inputValue: string): void => {
    if (!isValidInputCvc(inputValue)) return;
    onChange(inputValue);
    serverError?.onClear();

    if (shouldComplete(inputValue)) onComplete();
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
