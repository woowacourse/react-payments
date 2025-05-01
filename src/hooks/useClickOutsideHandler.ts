import { useEffect } from 'react';

function useClickOutsideHandler(
  targetRef: React.RefObject<HTMLElement | null>,
  executionFunction: Function,
  ...additionalCondition: boolean[]
) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        additionalCondition.every((condition) => condition) &&
        targetRef.current &&
        !targetRef.current.contains(e.target as Node)
      ) {
        executionFunction();
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  });
}

export default useClickOutsideHandler;
