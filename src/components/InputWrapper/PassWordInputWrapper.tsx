import { useState } from "react";
import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import { getPassWordErrorMessage } from "../../utils/getPassWordErrorMessage";

interface Props {
  setPassWord: (value: string) => void;
  value: string;
}

export default function PassWordInputWrapper({ setPassWord, value }: Props) {
  const [inputError, setInputError] = useState<string | null>(null);

  return (
    <InputGroup errorMessage={inputError}>
      <NumberInput
        type="password"
        autoFocus
        value={value}
        setValue={(newValue) => {
          setPassWord(newValue);
        }}
        placeholder="123"
        hasError={inputError !== null}
        maxLength={2}
        onError={setInputError}
        onBlur={() => {
          setInputError(getPassWordErrorMessage(value));
        }}
        style={{ width: "315px" }}
      />
    </InputGroup>
  );
}
