import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useState } from 'react';
import { getPasswordFieldState, isValidInputPassword } from '../../model/registerPassword';

export interface PasswordFieldControl {
  password: string;
  shouldComplete: (value: string) => boolean;
  onChange: (v: string) => void;
}

export interface PasswordFieldProps extends PasswordFieldControl {
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplete?: () => void;
  serverErrorMessage?: string;
}

export const PasswordField = ({
  password,
  shouldComplete,
  onChange,
  setStepRef,
  onComplete,
}: PasswordFieldProps) => {
  const [touched, setTouched] = useState<boolean>(false);

  const { errorMessage, maxLength } = getPasswordFieldState(password, touched);

  const handleChange = (inputValue: string): void => {
    if (!isValidInputPassword(inputValue)) return;

    onChange(inputValue);

    if (shouldComplete(inputValue)) {
      onComplete?.();
    }
  };

  return (
    <Field
      title="비밀번호를 입력해 주세요"
      subTitle="앞의 2자리를 입력해주세요"
      label="비밀번호 앞 2자리"
      errorMessage={errorMessage}
    >
      <Input
        ref={setStepRef}
        type="password"
        inputMode="numeric"
        value={password}
        maxLength={maxLength}
        placeholder="**"
        isError={touched && errorMessage !== undefined}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => setTouched(true)}
      />
    </Field>
  );
};
