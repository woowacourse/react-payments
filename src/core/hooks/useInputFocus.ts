import { useRef } from 'react';

export interface UseInputFocusResult {
  setInputRef: (node: HTMLInputElement | null, index: number) => void;
  focusNext: (index: number) => void;
}

export const useInputFocus = () => {
  const inputRefsMap = useRef<Map<number, HTMLInputElement | null>>(new Map());

  const getMap = () => {
    if (!inputRefsMap.current) inputRefsMap.current = new Map();
    return inputRefsMap.current;
  };

  const setInputRef = (node: HTMLInputElement | null, index: number): void => {
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

// 참고자료
// https://ko.react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback
