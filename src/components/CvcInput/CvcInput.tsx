import { ChangeEvent } from "react";
import Input from "../Input/Input";
import { MAGIC_NUMBER } from "../../constants/constants";

interface CvcInputProps {
  value: string;
  error: boolean;
  handleCvcNumberChange: (value: string) => void;
}

const placeholder = MAGIC_NUMBER.placeholders.cvcNumber;
const maxLength = MAGIC_NUMBER.maxLength.cvcNumber;

function CvcInput({ value, error, handleCvcNumberChange }: CvcInputProps) {
  return (
    <Input
      placeholder={placeholder}
      maxLength={maxLength}
      isError={error}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleCvcNumberChange(e.target.value)
      }
    />
  );
}

export default CvcInput;
