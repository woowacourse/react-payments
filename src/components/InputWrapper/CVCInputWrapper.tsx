import { useState } from "react";
import Input from "../Input/Input";
import InputGroup from "./InputGroup";
import { getCVCumberErrorMessage } from "../../utils/getCVCNumberErrorMessage";

interface Props {
  setCVCNumber: (value: string) => void;
  value: string;
}

export default function CVCInputWrapper({ setCVCNumber, value }: Props) {
  const [inputError, setInputError] = useState<string | null>(null);

  const filterOnlyNumber = (value: string) => {
    if (Number.isNaN(Number(value)) || (value !== "" && value.includes(" "))) {
      return false;
    } else return true;
  };

  return (
    <InputGroup errorMessage={inputError}>
      <Input
        value={value}
        setValue={setCVCNumber}
        placeholder="123"
        hasError={inputError !== null}
        maxLength={3}
        onError={setInputError}
        onBlur={() => {
          setInputError(getCVCumberErrorMessage(value));
        }}
        filterOnlyNumber={filterOnlyNumber}
        style={{ width: "315px" }}
      />
    </InputGroup>
  );
}
