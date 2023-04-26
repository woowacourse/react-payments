import { useRef } from 'react';

type RefsOf<T> = { [Key in keyof T]: React.RefObject<T[Key]> };

export const useGroupedRef = <
  // Enforce type to tuple
  Elements extends [unknown, ...unknown[]],
  // Get length from tuple
  Length extends number = Elements extends { length: infer U extends number } ? U : never,
>(
  length: Length,
) => {
  const refs = Array.from({ length }, () => useRef(null)) as RefsOf<Elements>;

  const getRef = <Index extends number>(index: Index) => {
    return refs[index];
  };

  return { refs, getRef };
};
