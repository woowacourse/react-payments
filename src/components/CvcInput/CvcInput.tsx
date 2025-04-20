import { ChangeEvent } from "react";
import Input from "../Input/Input";

interface CvcInputProps {
  value: string;
  error: boolean;
  handleCvcNumberChange: (value: string) => void;
}

function CvcInput({ value, error, handleCvcNumberChange }: CvcInputProps) {
  return (
    <Input
      placeholder="123"
      maxLength={3}
      isError={error}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleCvcNumberChange(e.target.value)
      }
    />
  );
}

export default CvcInput;
