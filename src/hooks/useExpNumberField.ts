import { useRef } from "react";
import { getExpNumberErrorMessage } from "../utils/getExpNumberErrorMessage";
import { useFieldErrors } from "./useFieldErrors";

export type ExpNumber = { mm: string; yy: string };

export default function useExpNumberField(
  onChange: (value: ExpNumber) => void,
  value: ExpNumber,
  onComplete: (isCompleted: boolean) => void,
) {
  const { inputErrors, setError, errorMessage } = useFieldErrors(["mm", "yy"]);

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleOnChange = (expKey: string) => (newValue: string) => {
    setError(expKey)(null);
    const newExpNumbers = { ...value, [expKey]: newValue };
    onChange(newExpNumbers);
    onComplete(getExpNumberErrorMessage(newExpNumbers) === null);

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

  return {
    inputRefs,
    inputErrors,
    setError,
    errorMessage,
    handleOnChange,
    handleOnBlur,
  };
}
