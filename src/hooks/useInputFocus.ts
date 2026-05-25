import { useRef } from "react";

const useInputFocus = () => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const registerInput = (index: number) => {
    return (element: HTMLInputElement | null) => {
      if (element) {
        inputRefs.current[index] = element;
      }
    };
  };

  const focusNextInput = (index: number) => {
    inputRefs.current[index + 1]?.focus();
  };

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  return {
    registerInput,
    focusNextInput,
    focusInput,
  };
};

export default useInputFocus;
