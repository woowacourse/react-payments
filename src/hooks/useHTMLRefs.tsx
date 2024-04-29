import { useRef } from 'react';

export default function useHTMLRefs<T extends HTMLElement>(number: number) {
  if (!Number.isInteger(number)) throw Error('정수만 들어올 수 있습니다.');
  if (number > 50) throw Error('50개까지만 생성할 수 있습니다.');
  if (number < 1) throw Error('1 이상의 정수만 들어올 수 있습니다.');
  const originalRefs: (React.MutableRefObject<T | null> | null)[] = [
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
    useRef<T>(null),
  ];

  const result: React.MutableRefObject<T | null>[] = originalRefs.slice(
    -number
  ) as React.MutableRefObject<T | null>[];

  Array.from({ length: 50 - number }).forEach((_, idx) => {
    originalRefs[idx] = null;
  });

  return result;
}
