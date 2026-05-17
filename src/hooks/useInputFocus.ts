import { useRef } from 'react';

export default function useInputFocus(count: number) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(count).fill(null));

  const setRef = (index: number, externalRef?: React.Ref<HTMLInputElement>) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
    if (externalRef) {
      if (typeof externalRef === 'function') externalRef(el);
      else (externalRef as React.RefObject<HTMLInputElement | null>).current = el;
    }
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

  const focusFirst = () => {
    inputRefs.current[0]?.focus();
  };

  return { setRef, focusNext, focusPrev, focusFirst };
}
