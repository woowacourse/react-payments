import { useEffect, type RefObject } from 'react';

function useFocusOnError<T extends HTMLElement>(
  ref: RefObject<T | null>,
  errorMessage?: string,
) {
  useEffect(() => {
    if (!errorMessage) return;

    const animationFrameId = requestAnimationFrame(() => {
      ref.current?.focus();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [errorMessage, ref]);
}

export default useFocusOnError;
