import { useRef } from 'react';

interface useInputFocusProps {
  inputValueLength: number;
}

function useInputFocus({ inputValueLength }: useInputFocusProps) {
  const inputRef = useRef<null[] | HTMLInputElement[]>([]);

  const handleChange = (i: number) => {
    const inputLength = inputRef.current[i]?.value.length;

    if (inputLength === inputValueLength) {
      inputRef.current[i + 1]?.focus();
    }
  };

  return { inputRef: inputRef, handleChange };
}

export default useInputFocus;
