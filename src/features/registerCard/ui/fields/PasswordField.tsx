import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import type { FieldControl } from '../../model/payments';
import { useState } from 'react';
import { isNumericString } from '@/core/utils/validator';
import {
  getErrorPassword,
  PASSWORD_LENGTH,
  validatePassword,
} from '@/entities/card/model/password';

interface PasswordFieldProps {
  passwordField: FieldControl;
  setStepRef: (node: HTMLInputElement | null) => void;
  onComplate: () => void;
}

export const PasswordField = ({ passwordField, setStepRef, onComplate }: PasswordFieldProps) => {
  const { value, handleChange } = passwordField;
  const [touched, setTouched] = useState<boolean>(false);

  const handleChangePW = (inputValue: string): void => {
    if (inputValue !== '' && !isNumericString(inputValue)) return;
    handleChange(inputValue);
    setTouched(false);
    if (validatePassword(inputValue)) onComplate();
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const error = validatePassword(value);
  const errorMessage = touched ? getErrorPassword(value) : undefined;
  return (
    <Field
      title="비밀번호를 입력해 주세요"
      subTitle="앞의 2자리를 입력해주세요"
      label="비밀번호 앞 2자리"
      errorMessage={errorMessage}
    >
      <Input
        ref={(node) => setStepRef(node)}
        type="password"
        inputMode="numeric"
        value={value}
        maxLength={PASSWORD_LENGTH}
        placeholder="**"
        isError={touched && error}
        onChange={(e) => handleChangePW(e.target.value)}
        onBlur={() => handleBlur()}
      />
    </Field>
  );
};
