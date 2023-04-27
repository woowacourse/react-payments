import { useEffect, useRef } from 'react';

export const useInputFocus = (
  isFocus: boolean | undefined,
  value: string | null,
  maxLength: number
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocus) {
      inputRef.current?.focus();
    }
    if (value && value.length >= maxLength) {
      inputRef.current?.blur();
      const nextInput = inputRef.current?.nextElementSibling;
      if (nextInput && nextInput instanceof HTMLElement) {
        nextInput.focus();
      }
    }
  }, [value, isFocus]);

  return inputRef;
};
