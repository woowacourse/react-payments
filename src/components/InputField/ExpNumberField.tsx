import NumberInput from "../Input/NumberInput";
import InputGroup from "./InputGroup";

import { useRef } from "react";
import { useFieldErrors } from "../../hooks/useFieldErrors";
import { getExpNumberErrorMessage } from "../../utils/getExpNumberErrorMessage";

export type ExpNumber = { mm: string; yy: string };
interface Props {
  onChange: (value: ExpNumber) => void;
  value: ExpNumber;
  errorMessage: string | null;
}

export default function ExpNumberField({
  onChange,
  value,
  errorMessage,
}: Props) {
  const {
    inputErrors,
    setError,
    errorMessage: localError,
  } = useFieldErrors(["mm", "yy"]);

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleOnChange = (expKey: string) => (newValue: string) => {
    setError(expKey)(null);
    const newExpNumbers = { ...value, [expKey]: newValue };
    onChange(newExpNumbers);

    if (expKey === "mm" && newValue.length === 2) {
      const result = getExpNumberErrorMessage({ mm: newValue, yy: value.yy });
      if (result === null || result.key !== "mm") {
        if (value.yy === "") inputRefs.current["yy"]?.focus();
      } else setError("mm")(result?.message);
    }
  };

  const handleOnBlur =
    (expKey: string) => (e: React.FocusEvent<HTMLInputElement>) => {
      const result = getExpNumberErrorMessage({
        ...value,
        [expKey]: e.target.value,
      });
      const message = result && result.key === expKey ? result.message : null;
      setError(expKey)(message);
    };

  return (
    <InputGroup errorMessage={localError || errorMessage}>
      {Object.entries(value).map(([expKey, expValue]) => (
        <NumberInput
          key={`${expKey}-input`}
          value={expValue}
          onChange={handleOnChange(expKey)}
          placeholder={expKey === "mm" ? "MM" : "YY"}
          autoFocus={expKey === "mm"}
          hasError={inputErrors[expKey] !== null}
          maxLength={2}
          onError={setError(expKey)}
          onBlur={handleOnBlur(expKey)}
          ref={(el) => {
            if (expKey !== "mm") inputRefs.current[expKey] = el;
          }}
          style={{ width: "152px" }}
        />
      ))}
    </InputGroup>
  );
}
