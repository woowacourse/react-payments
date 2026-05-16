import { useCallback, useLayoutEffect, useRef, type RefObject } from "react";
import { getSelectionRange, type SelectionRange } from "./utils";

interface IndexedSelectionRange extends SelectionRange {
  index: number;
}

export default function useInputGroupSelection<E extends HTMLElement>(refs: RefObject<E | null>[]) {
  const selectionRef = useRef<IndexedSelectionRange | null>(null);

  useLayoutEffect(() => {
    if (selectionRef.current === null) return;

    const { index, start, end } = selectionRef.current;
    selectionRef.current = null;
    const element = refs[index]?.current;
    if (element instanceof HTMLInputElement) {
      element.setSelectionRange(start, end);
    }
  });

  return useCallback((index: number, target: HTMLInputElement) => {
    selectionRef.current = {
      index,
      ...getSelectionRange(target),
    };
  }, []);
}
