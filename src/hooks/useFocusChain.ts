import type { RefObject } from 'react';

export const useFocusChain = (refs: RefObject<HTMLElement>[]) => {
  const next = () => {
    const focusedRef = refs.find((ref) => ref.current === document.activeElement);
    if (!focusedRef?.current) return;

    const nextRef = refs.find((_, index) => refs[index - 1] === focusedRef);
    nextRef?.current?.focus();
  };

  return { next };
};
