import { useRef } from 'react';

const useFocusRef = () => {
  const focusRef = useRef<HTMLElement[]>([]);

  const insert = (index: number) => (element: HTMLElement | null) => {
    if (element) focusRef.current[index] = element;
  };

  const focus = (index: number) => (go: number) => {
    focusRef.current[index + go]?.focus();
  };

  return [insert, focus] as const;
};

export default useFocusRef;
