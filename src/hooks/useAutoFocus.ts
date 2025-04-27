import { useCallback, useRef } from "react";

export const useAutoFocus = (count: number) => {
  const refs = Array.from({ length: count }, () => useRef<HTMLInputElement>(null))

  const focusNext = useCallback((index: number) => {
    const nextRef = refs[index + 1];

    if (nextRef && nextRef.current) {
      nextRef.current.focus();
    }
  }, [refs]);

  return {
    refs,
    focusNext
  };
};
