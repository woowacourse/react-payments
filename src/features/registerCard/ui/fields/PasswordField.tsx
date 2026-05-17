import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import { useState } from 'react';
import { validatePassword } from '@/entities/card/model/password';
import { getPasswordFieldState, isValidInputPassword } from '../../model/registerPassword';

export interface PasswordFieldControl {
  password: string;
  onChange: (v: string) => void;
}
interface PasswordFieldProps {
  passwordField: PasswordFieldControl;
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplate: () => void;
}

export const PasswordField = ({ passwordField, setStepRef, onComplate }: PasswordFieldProps) => {
  const { password, onChange } = passwordField;
  const [touched, setTouched] = useState<boolean>(false);

  const { errorMessage, isValid, maxLength } = getPasswordFieldState(password, touched);

  const handleChange = (inputValue: string): void => {
    if (!isValidInputPassword(inputValue)) return;

    onChange(inputValue);

    if (validatePassword(inputValue)) onComplate();
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
        isError={!isValid}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => setTouched(true)}
      />
    </Field>
  );
};
