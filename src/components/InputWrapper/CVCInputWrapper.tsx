import { useState } from "react";
import { isLengthMatch } from "../../utils/isLengthMatch";
import CardInfoInput from "../Input/CardInfoInput";
import CardInputWrapper from "./CardInputWrapper";

interface CVCInputWrapperProps {
  validator: (value: string) => string | null;
  setCVCNumber: (value: string) => void;
  value: string;
}

export default function CVCInputWrapper({
  validator,
  setCVCNumber,
  value,
}: CVCInputWrapperProps) {
  const [inputError, setInputError] = useState<string | null>(null);

  const [hasTouched, setHasTouched] = useState(false);
  const errorAfterCompleted = hasTouched ? validator(value) : null;
  const errorMessage = inputError ?? errorAfterCompleted;

  return (
    <CardInputWrapper errorMessage={errorMessage}>
      <CardInfoInput
        value={value}
        setValue={setCVCNumber}
        placeholder="123"
        validator={(value: string) => isLengthMatch(3, value)}
        maxLength={3}
        onError={setInputError}
        onBlur={() => setHasTouched(true)}
        onFocus={() => setHasTouched(false)}
        style={{ width: "315px" }}
      />
    </CardInputWrapper>
  );
}
