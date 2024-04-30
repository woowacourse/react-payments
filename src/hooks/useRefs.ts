import { useRef } from 'react';

const useRefs = <T extends HTMLElement>(length: number) => {
  const refs = useRef<(T | null)[]>(Array.from({ length }).map(() => null));

  const generateRefWithIndex = (index: number) => (element: T) => {
    refs.current[index] = element;
  };

  const getRefWithIndex = (index: number) => refs.current[index];

  return { getRefWithIndex, generateRefWithIndex } as const;
};

export default useRefs;
