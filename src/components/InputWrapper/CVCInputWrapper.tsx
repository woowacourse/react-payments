import { useState } from "react";
import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import { getCVCNumberErrorMessage } from "../../utils/getCVCNumberErrorMessage";

interface Props {
  setCVCNumber: (value: string) => void;
  value: string;
  onComplete: (isCompleted: boolean) => void;
}

export default function CVCInputWrapper({
  setCVCNumber,
  value,
  onComplete,
}: Props) {
  const [inputError, setInputError] = useState<string | null>(null);

  return (
    <InputGroup errorMessage={inputError}>
      <NumberInput
        value={value}
        onChange={(newValue) => {
          setInputError(null);
          setCVCNumber(newValue);
          onComplete(newValue.length === 3 && inputError === null);
        }}
        placeholder="123"
        autoFocus
        hasError={inputError !== null}
        maxLength={3}
        onError={setInputError}
        onBlur={() => {
          if (value !== "") setInputError(getCVCNumberErrorMessage(value));
        }}
        style={{ width: "315px" }}
      />
    </InputGroup>
  );
}
