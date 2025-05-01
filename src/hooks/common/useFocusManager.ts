import { useRef } from "react";

const useFocusManager = (count: number) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const setRef = (index: number) => (el: HTMLInputElement | null) => {
    if (el) inputRefs.current[index] = el;
  };

  const moveFocusOrBlur = ({ index, value, maxLength }: { index: number; value: string; maxLength: number }) => {
    if (value.length !== maxLength) return;

    const isLastInput = index === count - 1;

    if (isLastInput) {
      inputRefs.current[index]?.blur();
    } else {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return { setRef, moveFocusOrBlur };
};

export default useFocusManager;
