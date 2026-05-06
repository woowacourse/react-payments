import { useState } from "react";
import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import { getCVCumberErrorMessage } from "../../utils/getCVCNumberErrorMessage";

interface Props {
  setCVCNumber: (value: string) => void;
  value: string;
}

export default function CVCInputWrapper({ setCVCNumber, value }: Props) {
  const [inputError, setInputError] = useState<string | null>(null);

  return (
    <InputGroup errorMessage={inputError}>
      <NumberInput
        value={value}
        setValue={setCVCNumber}
        placeholder="123"
        hasError={inputError !== null}
        maxLength={3}
        onError={setInputError}
        onBlur={() => {
          setInputError(getCVCumberErrorMessage(value));
        }}
        style={{ width: "315px" }}
      />
    </InputGroup>
  );
}
