import { useState } from "react";
import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import { getPassWordErrorMessage } from "../../utils/getPassWordErrorMessage";

interface Props {
  setPassWord: (value: string) => void;
  value: string;
  onComplete: (isCompleted: boolean) => void;
}

export default function PassWordInputWrapper({
  setPassWord,
  value,
  onComplete,
}: Props) {
  const [inputError, setInputError] = useState<string | null>(null);

  return (
    <InputGroup errorMessage={inputError}>
      <NumberInput
        type="password"
        autoFocus
        value={value}
        setValue={(newValue) => {
          const newPassWord = newValue;
          setPassWord(newPassWord);
          onComplete(newPassWord.length === 2 && inputError === null);
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
