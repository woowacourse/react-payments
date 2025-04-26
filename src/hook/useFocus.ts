import { useRef } from 'react';
import type { CardInputProps } from '../types/CardInputTypes';

const useFocus = (inputKeys: string[], maxLength: number) => {
  const inputRefsArray = inputKeys.map((key) => [key, useRef<HTMLInputElement>(null)]);
  const inputRefsObject = Object.fromEntries(inputRefsArray);

  const handleFocus = (key: keyof CardInputProps, maxLength: number) => {
    const currentIndex = inputKeys.indexOf(key);
    const nextKey = inputKeys[currentIndex + 1];
    if (!nextKey) return;

    if (inputRefsObject[key].current.value.length === maxLength) {
      inputRefsObject[nextKey].current?.focus();
    }
  };

  return { inputRefsObject, handleFocus };
};

export default useFocus;
