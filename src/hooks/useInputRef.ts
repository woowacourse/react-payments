import { useRef, useCallback } from 'react';

function useInputRef(fieldsCount: number) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const setInputRef = useCallback((el: HTMLInputElement | null, idx: number) => {
    inputRefs.current[idx] = el;
  }, []);

  const focusNextInput = useCallback(
    (currentIdx: number) => {
      if (currentIdx < fieldsCount - 1 && inputRefs.current[currentIdx + 1]) {
        inputRefs.current[currentIdx + 1]?.focus();
      }
    },
    [fieldsCount]
  );

  return { inputRefs, setInputRef, focusNextInput };
}

export default useInputRef;
