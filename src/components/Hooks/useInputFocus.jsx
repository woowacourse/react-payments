import { useEffect, useRef, useState } from "react";

export default function useInputFocus(length, targetArray) {
  const [focusInputIndex, setFocusInputIndex] = useState(0);
  const inputRef = useRef([]);

  const handleFocusOut = (e) => {
    if (
      e.key === "Backspace" &&
      inputRef.current[focusInputIndex].value.length === 0
    ) {
      inputRef.current[focusInputIndex - 1]?.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current[focusInputIndex].value.length === length) {
      const index = targetArray.findIndex((target) => target.length !== length);
      inputRef.current[index]?.focus();
    }
  }, [length, targetArray, focusInputIndex]);

  useEffect(() => {
    inputRef.current[focusInputIndex].focus();
  }, [focusInputIndex]);

  return [inputRef, setFocusInputIndex, handleFocusOut];
}
