import { useEffect, useRef } from 'react';

interface useInputFocusProps<T> {
  inputCount: number;
  inputValueLength: number;
  changeValue: T;
}

function useInputFocus<T>({
  inputCount,
  inputValueLength,
  changeValue,
}: useInputFocusProps<T>) {
  const inputRef = useRef<null[] | HTMLInputElement[]>([]);

  useEffect(() => {
    for (let i = 0; i < inputCount - 1; i++) {
      const inputLength = inputRef.current[i]?.value.length;

      if (inputLength === inputValueLength) {
        inputRef.current[i + 1]?.focus();
      }
    }
  }, [changeValue, inputCount, inputValueLength]);

  return { inputRef: inputRef };
}

export default useInputFocus;
