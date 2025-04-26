import { useRef } from "react";

export function useAutoFocus() {
  const inputRefs = useRef<(HTMLInputElement | HTMLSelectElement | null)[]>([]);

  const setRef =
    (index: number) => (el: HTMLInputElement | HTMLSelectElement | null) => {
      inputRefs.current[index] = el;
    };

  const moveFocus = (index: number) => {
    inputRefs.current[index + 1]?.focus();
  };

  return { setRef, moveFocus };
}
