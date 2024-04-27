import { useRef, useState } from "react";

const useInputFocus = (inputCount: number, inputMaxLength: number) => {
  const inputRefs = useRef(Array(inputCount).fill(null));
  const [focusedIndex, setFocusedIndex] = useState("0");

  const focusNextInput = () => {
    const currentInput = inputRefs.current[Number(focusedIndex)];
    
    if (currentInput && currentInput.value.length === inputMaxLength) {
      const nextIndex = Number(focusedIndex) + 1;
      if (
        nextIndex < inputRefs.current.length &&
        inputRefs.current[nextIndex]
      ) {
        inputRefs.current[nextIndex].focus();
        setFocusedIndex(nextIndex.toString());
      }
    }
  };

  return { inputRefs, focusNextInput, setFocusedIndex };
};

export default useInputFocus;
