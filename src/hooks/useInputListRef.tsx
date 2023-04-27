import { useRef } from 'react';

const useInputListRef = (valueLength: number) => {
  const inputListRef = useRef<HTMLInputElement[]>([]);

  const focusNext = (index = 0) => {
    if (index === inputListRef.current.length - 1) return;

    if (inputListRef.current[index].value.length === valueLength) {
      index += 1;
      inputListRef.current[index].focus();
    }
  };

  return { inputListRef, focusNext };
};

export default useInputListRef;
