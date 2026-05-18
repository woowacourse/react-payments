import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";

import { useState } from "react";
import { getCvcNumberErrorMessage } from "../../utils/getCvcNumberErrorMessage";

interface Props {
  onChange: (value: string) => void;
  value: string;
  onComplete: (isCompleted: boolean) => void;
  serverErrorMessage: string | null;
}

export default function CvcNumberField({
  onChange,
  value,
  onComplete,
  serverErrorMessage,
}: Props) {
  const [inputError, setInputError] = useState<string | null>(null);

  const handleOnChange = (newValue: string) => {
    setInputError(null);
    onChange(newValue);
    onComplete(getCvcNumberErrorMessage(newValue) === null);
  };

  const handleOnBlur = () => {
    if (value !== "")
      setInputError(getCvcNumberErrorMessage(value)?.message ?? null);
  };

  return (
    <InputGroup errorMessage={inputError || serverErrorMessage}>
      <NumberInput
        value={value}
        onChange={handleOnChange}
        placeholder="123"
        autoFocus
        hasError={inputError !== null}
        maxLength={3}
        onError={setInputError}
        onBlur={handleOnBlur}
        style={{ width: "315px" }}
      />
    </InputGroup>
  );
}
