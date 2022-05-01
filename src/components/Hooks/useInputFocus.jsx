import { useRef, useState } from "react";
import useCheckInitMount from "./useCheckInitMount";

export default function useInputFocus(length, targetArray) {
  const [focusInputIndex, setFocusInputIndex] = useState(0);
  const inputRef = useRef([]);

  const focusBeforeElement = (e) => {
    if (
      e.key === "Backspace" &&
      inputRef.current[focusInputIndex].value.length === 0
    ) {
      inputRef.current[focusInputIndex - 1]?.focus();
      return;
    }
  };

  useCheckInitMount(() => {
    if (inputRef.current[focusInputIndex].value.length === length) {
      const index = targetArray.findIndex((target) => target.length !== length);
      inputRef.current[index]?.focus();
    }
  }, [targetArray, focusInputIndex]);

  useCheckInitMount(() => {
    inputRef.current[focusInputIndex].focus();
  }, [focusInputIndex]);

  return [inputRef, setFocusInputIndex, focusBeforeElement];
}
