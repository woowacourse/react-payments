import type React from 'react';
import { useEffect, useState } from 'react';

export type GroupedFocusOption = {
  onBlur?: () => void;
  onFocus?: () => void;
};

export const useGroupedFocus = (
  refs: React.RefObject<HTMLElement>[],
  option: GroupedFocusOption = {},
) => {
  const [focused, setFocused] = useState(false);
  const [lastBlurred, setLastBlurred] = useState<null | React.RefObject<HTMLElement>>(null);

  useEffect(() => {
    const unregisters = refs.map((ref) => {
      const handleFocus = () => setFocused(true);
      const handleBlur = () => {
        setFocused(false);
        setLastBlurred(ref);
      };

      ref.current?.addEventListener('focus', handleFocus);
      ref.current?.addEventListener('blur', handleBlur);

      return () => {
        ref.current?.removeEventListener('focus', handleFocus);
        ref.current?.removeEventListener('blur', handleBlur);
      };
    });

    return () => unregisters.forEach((unregister) => unregister());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);

  useEffect(() => {
    (focused ? option.onFocus : option.onBlur)?.();
  }, [focused, option]);

  const focusNext = () => {
    const focusedRef = refs.find((ref) => ref.current === document.activeElement);
    if (!focusedRef?.current) return;

    const nextRef = refs.find((_, index) => refs[index - 1] === focusedRef);
    nextRef?.current?.focus();
  };

  const cancelBlur = () => lastBlurred?.current?.focus();

  return { focusNext, cancelBlur };
};
