import { useState } from "react";
import { isMonthMatch } from "../../utils/isMonthMatch";

import { isLengthMatch } from "../../utils/isLengthMatch";
import Input from "../Input/Input";
import InputGroup from "./InputGroup";

type EXPNumber = { mm: string; yy: string };
interface Props {
  validator: (value: EXPNumber) => { message: string; key: "mm" | "yy" } | null;
  setEXPNumber: (value: EXPNumber) => void;
  value: EXPNumber;
}

export default function EXPInputWrapper({
  validator,
  setEXPNumber,
  value,
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
      <Input
        value={value.mm}
        setValue={(newValue) => setEXPNumber({ ...value, mm: newValue })}
        placeholder="MM"
        validator={(value: string) => isMonthMatch(value)}
        maxLength={2}
        onError={setError("mm")}
        onBlur={() => {
          const result = validator(value);
          if (result && result.key === "mm") setError("mm")(result.message);
        }}
        style={{ width: "152px" }}
      />
      <Input
        value={value.yy}
        setValue={(newValue) => setEXPNumber({ ...value, yy: newValue })}
        placeholder="YY"
        validator={(value: string) => isLengthMatch(2, value)}
        maxLength={2}
        onError={setError("yy")}
        onBlur={() => {
          const result = validator(value);
          if (result && result.key === "yy") setError("yy")(result.message);
        }}
        style={{ width: "152px" }}
      />
    </InputGroup>
  );
}
