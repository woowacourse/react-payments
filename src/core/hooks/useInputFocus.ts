import { useRef } from 'react';

type FocusableElement = HTMLInputElement | HTMLSelectElement;

export interface UseInputFocusResult {
  setInputRef: (node: FocusableElement | null, index: number) => void;
  focusNext: (index: number) => void;
}

export const useInputFocus = (): UseInputFocusResult => {
  const inputRefsMap = useRef<Map<number, FocusableElement | null>>(new Map());

  const getMap = () => {
    if (!inputRefsMap.current) inputRefsMap.current = new Map();
    return inputRefsMap.current;
  };

  const setInputRef = (node: FocusableElement | null, index: number): void => {
    const map = getMap();
    if (node) {
      map.set(index, node);
      return;
    }
    map.delete(index);
  };

  const focusNext = (index: number): void => {
    const map = getMap();
    map.get(index)?.focus();
  };

  return { setInputRef, focusNext };
};
