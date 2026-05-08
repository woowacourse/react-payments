// src/hooks/useInputShell.ts
import { useRef, useState } from "react";

interface UseInputShellProps<T> {
  value: T;
  setValue: (value: T) => void;
  maxLengthList: number[];
  valueUpdater: (currentValue: T, newValue: string, index: number) => T;
  errorChecker: (currentValue: T) => boolean[];
  errorMessageGenerator: (currentValue: T) => string;
}

export const useInputShell = <T>({
  value,
  setValue,
  maxLengthList,
  valueUpdater,
  errorChecker,
  errorMessageGenerator,
}: UseInputShellProps<T>) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [errors, setErrors] = useState<boolean[]>(Array(maxLengthList.length).fill(false));

  const handleOnChange = (inputValue: string, index: number) => {
    if (!/^[0-9]*$/.test(inputValue)) return;

    const maxLength = maxLengthList[index];
    const slicedValue = inputValue.slice(0, maxLength);

    setValue(valueUpdater(value, slicedValue, index));

    if (slicedValue.length === maxLength && index < maxLengthList.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOnBlur = (inputValue: string, index: number) => {
    const updatedValue = valueUpdater(value, inputValue, index);
    setErrors(errorChecker(updatedValue));
  };

  return {
    inputRefs,
    errors,
    handleOnChange,
    handleOnBlur,
    finalErrorMessage: errors.some((error) => error) ? errorMessageGenerator(value) : "",
  };
};