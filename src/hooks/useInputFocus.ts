import { useRef } from "react";

const useInputFocus = (inputLength: number) => {
  const refs = useRef<HTMLInputElement[]>([]);

  const registRef = (inputIndex: number, element: HTMLInputElement | null) => {
    if (element) refs.current[inputIndex] = element;
  };

  const isNextInputFocusable = (inputValue: string, inputIndex: number) => {
    return inputValue.length === inputLength && inputIndex < refs.current.length - 1;
  };

  const focusNextInput = (currentInputIndex: number) => {
    refs.current[currentInputIndex + 1]?.focus();
  };

  return { registRef, isNextInputFocusable, focusNextInput };
};

export default useInputFocus;
