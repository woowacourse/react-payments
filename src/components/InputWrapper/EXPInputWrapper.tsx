import { useState, useRef, useEffect } from "react";
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

  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  useEffect(() => {
    if (value.mm.length === 2 && value.yy === "") {
      const result = getEXPNumberErrorMessage({ mm: value.mm, yy: value.yy });
      if (result === null || result.key !== "mm") {
        inputRefs.current["yy"]?.focus();
      } else setError("mm")(result?.message);
    }
  }, [value.mm, value.yy]);

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
          autoFocus={expKey === "mm"}
          hasError={inputErrors[expKey as keyof EXPNumber] !== null}
          maxLength={2}
          onError={setError(expKey as keyof EXPNumber)}
          onBlur={() => {
            const result = getEXPNumberErrorMessage(value);
            const message =
              result && result.key === expKey ? result.message : null;
            setError(expKey as keyof EXPNumber)(message);
          }}
          ref={(el) => {
            if (expKey !== "mm") inputRefs.current[expKey] = el;
          }}
          style={{ width: "152px" }}
        />
      ))}
    </InputGroup>
  );
}
