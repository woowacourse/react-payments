import { useState } from "react";
import { isMonthMatch } from "../../utils/isMonthMatch";

import Input from "../Input/Input";
import InputGroup from "./InputGroup";
import { getEXPNumberErrorMessage } from "../../utils/getEXPNumberErrorMessage";
import { isLengthMatch } from "../../utils/isLengthMatch";

type EXPNumber = { mm: string; yy: string };
interface Props {
  setEXPNumber: (value: EXPNumber) => void;
  value: EXPNumber;
}

export default function EXPInputWrapper({ setEXPNumber, value }: Props) {
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
  const filterOnlyNumber = (value: string) => {
    if (Number.isNaN(Number(value)) || (value !== "" && value.includes(" "))) {
      return false;
    } else return true;
  };
  return (
    <InputGroup
      errorMessage={
        Object.values(inputErrors).find((err) => err !== null) ?? null
      }
    >
      {Object.entries(value).map(([expKey, expValue]) => (
        <Input
          key={`${expKey}-input`}
          value={expValue}
          setValue={(newValue) =>
            setEXPNumber({ ...value, [expKey]: newValue })
          }
          placeholder={expKey === "mm" ? "MM" : "YY"}
          isValid={
            expKey === "mm"
              ? (value: string) => isMonthMatch(value)
              : (value: string) => isLengthMatch(2, value)
          }
          maxLength={2}
          onError={setError(expKey as keyof EXPNumber)}
          onBlur={() => {
            const result = getEXPNumberErrorMessage(value);
            if (result && result.key === expKey)
              setError(expKey as keyof EXPNumber)(result.message);
          }}
          filterOnlyNumber={filterOnlyNumber}
          style={{ width: "152px" }}
        />
      ))}
    </InputGroup>
  );
}
