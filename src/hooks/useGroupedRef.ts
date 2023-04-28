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
  // 항상 동일한 횟수만큼 호출되는 것을 TypeScript로 어느정도 보장했기 때문에
  // 아래와 같은 사용에선 문제가 되지 않는다
  //
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refs = Array.from({ length }, () => useRef(null)) as RefsOf<Elements>;

  const getRef = <Index extends number>(index: Index) => {
    return refs[index];
  };

  return { refs, getRef };
};
