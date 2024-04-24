import Field from "@/components/layout/Field/Field";
import Input from "../common/Input/Input";
import { ChangeEvent } from "react";

interface PasswordInputProps {
  password: { value: string; isDone: boolean };
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({ password, onChange }: PasswordInputProps) => {
  return (
    <Field
      title="비밀번호를 입력해 주세요"
      description="앞의 2자리를 입력해주세요"
      labelText="비밀번호 앞 2자리"
      errorMessage=""
    >
      <Input
        name="password"
        value={password.value}
        placeholder="비밀번호"
        maxLength={2}
        isPassword={true}
        autoFocus
        onChange={onChange}
      />
    </Field>
  );
};

export default PasswordInput;
