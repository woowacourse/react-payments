import { useEffect, useRef } from 'react';

export const useFocus = (length: number) => {
  const refs = Array.from({ length }, () => useRef<HTMLInputElement>(null));

  //TODO: 다음 input으로 이동

  useEffect(() => {
    if (refs[0].current) {
      refs[0].current.focus();
    }
  }, []);

  return { refs };
};
