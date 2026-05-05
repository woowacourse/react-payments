import { useState } from "react";
import { isLengthMatch } from "../../utils/isLengthMatch";
import Input from "../Input/Input";
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
      <Input
        value={value}
        setValue={setCVCNumber}
        placeholder="123"
        isValid={(value: string) => isLengthMatch(3, value)}
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
