import { useState } from "react";
import { isLengthMatch } from "../../utils/isLengthMatch";
import Input from "../Input/Input";
import InputGroup from "./InputGroup";

interface Props {
  validator: (value: string) => string | null;
  setCVCNumber: (value: string) => void;
  value: string;
}

export default function CVCInputWrapper({
  validator,
  setCVCNumber,
  value,
}: Props) {
  const [inputError, setInputError] = useState<string | null>(null);

  return (
    <InputGroup errorMessage={inputError}>
      <Input
        value={value}
        setValue={setCVCNumber}
        placeholder="123"
        isValid={(value: string) => isLengthMatch(3, value)}
        maxLength={3}
        onError={setInputError}
        onBlur={() => {
          setInputError(validator(value));
        }}
        style={{ width: "315px" }}
      />
    </InputGroup>
  );
}
