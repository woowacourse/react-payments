import { useRef } from 'react';

export default function useInputFocus(count: number) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(count).fill(null));

  const setRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };

  const focusNext = (index: number) => {
    if (index < count - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const focusPrev = (index: number) => {
    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return { setRef, focusNext, focusPrev };
}
