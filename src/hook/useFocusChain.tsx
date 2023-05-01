/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";

export const useFocusChain = (inputNumber: number, fullLength: number) => {
  const inputRefs = Array.from({ length: inputNumber }, () =>
    useRef<HTMLInputElement>(null)
  );

  const isLastInput = (ind: number) => {
    return ind === inputNumber - 1;
  };

  const isInputFull = (value: string) => {
    return value.length === fullLength;
  };

  const moveFocusToNext = (ind: number, value: string) => {
    if (isLastInput(ind) || !isInputFull(value)) {
      return;
    }

    inputRefs[ind + 1].current?.focus();
  };

  return { inputRefs, moveFocusToNext };
};
