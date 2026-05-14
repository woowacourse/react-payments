import { Field } from '@/core/components/field/Field';
import { Input } from '@/core/components/input/Input';
import type { UsePasswordResult } from '../../hooks/usePassword';

interface PasswordFieldProps {
  password: UsePasswordResult;
  setStepRef: (node: HTMLInputElement | null) => void;
}

export const PasswordField = ({ password, setStepRef }: PasswordFieldProps) => {
  const { value, maxLength, errorMessage, handleChange, handleBlur } = password;
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
        maxLength={maxLength}
        placeholder="**"
        isError={errorMessage !== undefined}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => handleBlur()}
      />
    </Field>
  );
};
