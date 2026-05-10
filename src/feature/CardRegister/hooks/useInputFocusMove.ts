import {useRef} from 'react';
import type {ChangeEvent, ChangeEventHandler, KeyboardEvent} from 'react';

type FocusMoveInputProps = {
  value: string;
  maxLength: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const useInputFocusMove = (inputProps: FocusMoveInputProps[]) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const setInputRef = (index: number) => (element: HTMLInputElement | null) => {
    inputRefs.current[index] = element;
  };

  const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    inputProps[index].onChange(event);

    const value = event.currentTarget.value;
    const isFull = value.length === inputProps[index].maxLength;
    const hasNextInput = index < inputProps.length - 1;

    if (isFull && hasNextInput) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    const isEmpty = inputProps[index].value === '';
    const hasPreviousInput = index > 0;

    if (event.key === 'Backspace' && isEmpty && hasPreviousInput) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return {
    setInputRef,
    handleChange,
    handleKeyDown,
  };
};
