// hooks/useAutoFocusNext.ts
import { useEffect } from 'react';

export const useAutoFocusNext = (value: string, index: number, refs: React.RefObject<HTMLInputElement[]>, maxLength = 4) => {
  useEffect(() => {
    if (value.length === maxLength) {
      refs.current[index + 1]?.focus();
    }
  }, [value, index, refs, maxLength]);
};
