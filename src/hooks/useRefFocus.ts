import { useRef } from 'react';

const useRefFocus = (refArray: React.RefObject<HTMLInputElement | null>[]) => {
  const currentIndex = useRef(0);

  const focusFirst = () => {
    if (refArray.length === 0) return;
    refArray[currentIndex.current].current?.focus();
  };

  const focusNext = () => {
    if (currentIndex.current >= refArray.length - 1) return;

    currentIndex.current += 1;
    refArray[currentIndex.current].current?.focus();
  };

  return {
    focusFirst,
    focusNext,
  };
};

export default useRefFocus;
