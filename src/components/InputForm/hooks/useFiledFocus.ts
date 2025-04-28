import { useRef } from "react";

function useFieldFocus<T extends HTMLElement>(fieldCount: number) {
  const fieldRefs = Array(fieldCount)
    .fill(null)
    .map(() => useRef<T>(null));

  const focusField = (index: number) => {
    if (index >= 0 && index < fieldCount) {
      fieldRefs[index].current?.focus();
    }
  };

  const handleAutoFocus = (
    currentIndex: number,
    value: string,
    maxLength: number
  ) => {
    if (value.length >= maxLength && currentIndex < fieldCount - 1) {
      focusField(currentIndex + 1);
    }
  };

  return {
    fieldRefs,
    focusField,
    handleAutoFocus,
  };
}

export default useFieldFocus;
