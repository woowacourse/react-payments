import { ChangeEvent } from "react";
import Input from "../Input/Input";
import { MAGIC_NUMBER } from "../../constants/constants";

interface PasswordProps {
  value: string;
  error: boolean;
  handlePasswordChange: (value: string) => void;
}

const maxLength = MAGIC_NUMBER.maxLength.password;

function PasswordInput({ value, error, handlePasswordChange }: PasswordProps) {
  return (
    <Input
      type="password"
      maxLength={maxLength}
      isError={error}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handlePasswordChange(e.target.value)
      }
      autoFocus={true}
    />
  );
}

export default PasswordInput;
