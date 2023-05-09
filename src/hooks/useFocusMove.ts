import { useRef } from 'react';

const useFocusMove = <T extends HTMLElement>(initialRefs: T[] = []) => {
  const focusRefs = useRef<T[]>(initialRefs);

  const insert = (element: T | null) => {
    if (focusRefs.current.find(el => el === element)) return;
    if (element) focusRefs.current.push(element);
  };

  const move = (count = 1) => {
    const currentRef = focusRefs.current.find(element => element === document.activeElement);

    if (!currentRef) return;

    focusRefs.current[focusRefs.current.indexOf(currentRef) + count]?.focus();
  };

  return { insert, move };
};

export default useFocusMove;
