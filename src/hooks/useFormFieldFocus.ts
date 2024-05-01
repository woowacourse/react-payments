import React from 'react';

export default function useFormFieldFocus<T extends HTMLElement>(
  length: number = 1
) {
  const refs = Array.from({ length }).map(() => React.createRef<T>());

  const moveToNextInput = (index: number = 0) => {
    const [curInput, nextInput] = refs.slice(index, index + 2);

    curInput.current?.blur();

    if (nextInput) nextInput.current?.focus();
  };

  return { refs, moveToNextInput };
}
