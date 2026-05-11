import { useCallback, useLayoutEffect, useRef, type RefObject } from "react";

interface SelectionRange {
  start: number;
  end: number;
}

interface IndexedSelectionRange extends SelectionRange {
  index: number;
}

function getSelectionRange(target: HTMLInputElement): SelectionRange {
  return {
    start: target.selectionStart ?? target.value.length,
    end: target.selectionEnd ?? target.value.length,
  };
}

export function useSelectionRestore<E extends HTMLElement>(ref: RefObject<E | null>) {
  const selectionRef = useRef<SelectionRange | null>(null);

  useLayoutEffect(() => {
    if (selectionRef.current === null) return;

    const { start, end } = selectionRef.current;
    selectionRef.current = null;
    if (ref.current instanceof HTMLInputElement) {
      ref.current.setSelectionRange(start, end);
    }
  });

  return useCallback((target: HTMLInputElement) => {
    selectionRef.current = getSelectionRange(target);
  }, []);
}

export function useIndexedSelectionRestore(refs: RefObject<HTMLInputElement | null>[]) {
  const selectionRef = useRef<IndexedSelectionRange | null>(null);

  useLayoutEffect(() => {
    if (selectionRef.current === null) return;

    const { index, start, end } = selectionRef.current;
    selectionRef.current = null;
    refs[index]?.current?.setSelectionRange(start, end);
  });

  return useCallback((index: number, target: HTMLInputElement) => {
    selectionRef.current = {
      index,
      ...getSelectionRange(target),
    };
  }, []);
}
