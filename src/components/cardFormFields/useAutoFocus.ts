import { useRef } from "react";

export function useAutoFocus() {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const setRef = (index: number) => (el: HTMLInputElement | null) => {
    refs.current[index] = el;
  };

  const focusNext = (currentIndex: number) => {
    refs.current[currentIndex + 1]?.focus();
  };

  return { setRef, focusNext };
}
