import { useRef } from 'react';

const useMoveFocus = () => {
  const focusRef = useRef<HTMLElement[]>([]);

  const insert = (element: HTMLElement | null) => {
    if (focusRef.current.find((el) => el === element)) return;
    if (element) focusRef.current.push(element);
  };

  const move = (count: number = 1) => {
    const currentRef = focusRef.current.find((element) => element === document.activeElement);

    if (!currentRef) return;

    focusRef.current[focusRef.current.indexOf(currentRef) + count]?.focus();
  };

  return { insert, move };
};

export default useMoveFocus;
