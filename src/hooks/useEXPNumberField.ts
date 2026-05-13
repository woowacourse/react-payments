import { useRef } from "react";
import { getEXPNumberErrorMessage } from "../utils/getEXPNumberErrorMessage";
import { useFieldErrors } from "./useFieldErrors";

export type EXPNumber = { mm: string; yy: string };

export default function useEXPNumberField(
  setEXPNumber: (value: EXPNumber) => void,
  value: EXPNumber,
  onComplete: (isCompleted: boolean) => void,
) {
  const { inputErrors, setError, errorMessage } = useFieldErrors(["mm", "yy"]);

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleOnChange = (expKey: string) => (newValue: string) => {
    setError(expKey as keyof EXPNumber)(null);
    const newEXPNumbers = { ...value, [expKey]: newValue };
    setEXPNumber(newEXPNumbers);
    onComplete(
      Object.values(newEXPNumbers).every((value) => value.length === 2) &&
        Object.values(inputErrors).every((err) => err === null),
    );

    if (expKey === "mm" && newValue.length === 2) {
      const result = getEXPNumberErrorMessage({ mm: newValue, yy: value.yy });
      if (result === null || result.key !== "mm") {
        if (value.yy === "") inputRefs.current["yy"]?.focus();
      } else setError("mm")(result?.message);
    }
  };

  const handleOnBlur =
    (expKey: string) => (e: React.FocusEvent<HTMLInputElement>) => {
      const result = getEXPNumberErrorMessage({
        ...value,
        [expKey]: e.target.value,
      });
      const message = result && result.key === expKey ? result.message : null;
      setError(expKey as keyof EXPNumber)(message);
    };

  return {
    inputRefs,
    inputErrors,
    setError,
    errorMessage,
    handleOnChange,
    handleOnBlur,
  };
}
