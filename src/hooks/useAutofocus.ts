import type { RefObject } from 'react';

const useAutofocus = (inputRefs: RefObject<HTMLInputElement>[]) => {
  const focusNextInput = (target: HTMLInputElement) => {
    const { value, maxLength } = target;

    if (value.length !== maxLength) return;

    const nextTargetIndex =
      inputRefs.findIndex((inputRef) => inputRef.current === target) + 1;

    if (nextTargetIndex === inputRefs.length) return;

    inputRefs[nextTargetIndex].current?.focus();
  };

  return focusNextInput;
};

export default useAutofocus;
