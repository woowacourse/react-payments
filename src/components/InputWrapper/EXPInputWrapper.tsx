import { useState } from "react";
import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";
import { getEXPNumberErrorMessage } from "../../utils/getEXPNumberErrorMessage";

type EXPNumber = { mm: string; yy: string };
interface Props {
  setEXPNumber: (value: EXPNumber) => void;
  value: EXPNumber;
  onComplete: (isCompleted: boolean) => void;
}

export default function EXPInputWrapper({
  setEXPNumber,
  value,
  onComplete,
}: Props) {
  const [inputErrors, setInputErrors] = useState<{
    mm: string | null;
    yy: string | null;
  }>({
    mm: null,
    yy: null,
  });

  const setError = (key: "mm" | "yy") => (message: string | null) => {
    setInputErrors((prev) => ({ ...prev, [key]: message }));
  };

  return (
    <InputGroup
      errorMessage={
        Object.values(inputErrors).find((err) => err !== null) ?? null
      }
    >
      {Object.entries(value).map(([expKey, expValue]) => (
        <NumberInput
          key={`${expKey}-input`}
          value={expValue}
          setValue={(newValue) => {
            const newEXPNumbers = { ...value, [expKey]: newValue };
            setEXPNumber(newEXPNumbers);
            onComplete(
              Object.values(newEXPNumbers).every(
                (value) => value.length === 2,
              ) && Object.values(inputErrors).every((err) => err === null),
            );
          }}
          placeholder={expKey === "mm" ? "MM" : "YY"}
          hasError={inputErrors[expKey as keyof EXPNumber] !== null}
          maxLength={2}
          onError={setError(expKey as keyof EXPNumber)}
          onBlur={() => {
            const result = getEXPNumberErrorMessage(value);
            const message =
              result && result.key === expKey ? result.message : null;
            setError(expKey as keyof EXPNumber)(message);
          }}
          style={{ width: "152px" }}
        />
      ))}
    </InputGroup>
  );
}
