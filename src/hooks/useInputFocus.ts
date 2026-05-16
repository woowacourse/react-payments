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

  return {
    registerInput,
    focusNextInput,
  };
};

export default useInputFocus;
