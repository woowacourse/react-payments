import { useRef } from 'react';
import type { CardInputProps } from '../types/CardInputTypes';
import { useEffect } from 'react';

const useFocus = (inputKeys: string[]) => {
  const inputRefsArray = inputKeys.map((key) => [key, useRef<HTMLInputElement>(null)]);
  const inputRefsObject = Object.fromEntries(inputRefsArray);

  useEffect(() => {
    inputRefsObject[inputKeys[0]].current?.focus();
  }, []);

  const handleFocus = (key: keyof CardInputProps, maxLength: number) => {
    const currentIndex = inputKeys.indexOf(key);
    const nextKey = inputKeys[currentIndex + 1];
    if (!nextKey) {
      return;
    }

    if (inputRefsObject[key].current.value.length === maxLength) {
      inputRefsObject[nextKey].current?.focus();
    }
  };

  return { inputRefsObject, handleFocus };
};

export default useFocus;
