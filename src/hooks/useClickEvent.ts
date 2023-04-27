import { RefObject, useEffect } from 'react';

export const useClickEvent = (
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target === ref.current) {
        callback();
      }
    };

    document.addEventListener('click', handler);

    return () => document.removeEventListener('click', handler);
  }, [ref, callback]);
};
