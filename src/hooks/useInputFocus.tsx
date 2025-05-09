import { useRef } from 'react';

interface useInputFocusProps {
  inputValueLength: number;
}

function useInputFocus({ inputValueLength }: useInputFocusProps) {
  const inputRef = useRef<null[] | HTMLInputElement[]>([]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    i: number,
  ) => {
    if (e.key === 'ArrowLeft' && inputRef.current[i - 1]) {
      e.preventDefault();
      inputRef.current[i - 1]?.focus();
      inputRef.current[i - 1]?.setSelectionRange(
        inputValueLength,
        inputValueLength,
      );
    }
    if (e.key === 'ArrowRight' && inputRef.current[i + 1]) {
      inputRef.current[i + 1]?.focus();
    }
  };

  const handleChange = (i: number) => {
    const inputLength = inputRef.current[i]?.value.length;
    if (inputLength === 0 && inputRef.current[i - 1]) {
      inputRef.current[i - 1]?.focus();
      inputRef.current[i - 1]?.setSelectionRange(
        inputValueLength,
        inputValueLength,
      );
    }

    if (inputLength === inputValueLength) {
      inputRef.current[i + 1]?.focus();
    }
  };

  return { inputRef: inputRef, handleChange, handleKeyDown };
}

export default useInputFocus;
