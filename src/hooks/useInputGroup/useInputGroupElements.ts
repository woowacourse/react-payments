import { createRef, useCallback, useLayoutEffect, useRef, useState, type RefObject } from "react";

export default function useInputGroupElements<E extends HTMLElement>(initialLength: number) {
  const [refs, setRefs] = useState<RefObject<E | null>[]>(
    () => Array.from({ length: initialLength }, () => createRef<E>())
  );
  const pendingFocusIndexRef = useRef<number | null>(null);

  const resizeRefs = useCallback((length: number) => {
    setRefs(prev => Array.from({ length }, (_, index) => prev[index] ?? createRef<E>()));
  }, []);

  const focusAt = useCallback((index: number) => {
    const ref = refs[index];
    if (ref) {
      ref.current?.focus();
      return;
    }

    pendingFocusIndexRef.current = index;
  }, [refs]);

  useLayoutEffect(() => {
    if (pendingFocusIndexRef.current === null) return;

    refs[pendingFocusIndexRef.current]?.current?.focus();
    pendingFocusIndexRef.current = null;
  }, [refs]);

  return {
    refs,
    resizeRefs,
    focusAt,
  };
}
