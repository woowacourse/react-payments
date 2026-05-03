import { useState } from "react";
import { isMonthMatch } from "../../utils/isMonthMatch";

import { isLengthMatch } from "../../utils/isLengthMatch";
import CardInfoInput from "../Input/CardInfoInput";
import CardInputWrapper from "./CardInputWrapper";

interface Props {
  validator: (value: string[]) => { message: string; index: number } | null;
  setEXPNumber: (index: number) => (value: string) => void;
  value: string[];
}

export default function EXPInputWrapper({
  validator,
  setEXPNumber,
  value,
}: Props) {
  const [inputErrors, setInputErrors] = useState<(string | null)[]>([
    null,
    null,
  ]);

  const setError = (index: number) => (message: string | null) => {
    setInputErrors((prev) => prev.with(index, message));
  };

  return (
    <CardInputWrapper
      errorMessage={inputErrors.find((err) => err !== null) ?? null}
    >
      <CardInfoInput
        value={value[0]}
        setValue={setEXPNumber(0)}
        placeholder="MM"
        validator={(value: string) => isMonthMatch(value)}
        maxLength={2}
        onError={setError(0)}
        onBlur={() => {
          const result = validator(value);
          if (result && result.index === 0) setError(0)(result.message);
        }}
        style={{ width: "152px" }}
      />
      <CardInfoInput
        value={value[1]}
        setValue={setEXPNumber(1)}
        placeholder="YY"
        validator={(value: string) => isLengthMatch(2, value)}
        maxLength={2}
        onError={setError(1)}
        onBlur={() => {
          const result = validator(value);
          if (result && result.index === 1) setError(1)(result.message);
        }}
        style={{ width: "152px" }}
      />
    </CardInputWrapper>
  );
}
