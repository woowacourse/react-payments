import { useState } from "react";
import { isLengthMatch } from "../../utils/isLengthMatch";
import CardInfoInput from "../Input/CardInfoInput";
import CardInputWrapper from "./CardInputWrapper";

interface Props {
  validator: (value: string[]) => { message: string; index: number } | null;
  setCardNumber: (index: number) => (value: string) => void;
  value: string[];
}

export default function CardNumberInputWrapper({
  validator,
  setCardNumber,
  value,
}: Props) {
  const [inputErrors, setInputErrors] = useState<(string | null)[]>([
    null,
    null,
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
      {value.map((_, index) => (
        <CardInfoInput
          key={`${index}th-input`}
          value={value[index]}
          setValue={setCardNumber(index)}
          placeholder="1234"
          validator={(value: string) => isLengthMatch(4, value)}
          maxLength={4}
          onError={setError(index)}
          onBlur={() => {
            const result = validator(value);
            if (result && result.index === index)
              setError(index)(result.message);
          }}
          style={{ width: "71px" }}
        />
      ))}
    </CardInputWrapper>
  );
}
