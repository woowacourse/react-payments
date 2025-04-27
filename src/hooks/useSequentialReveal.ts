import { useRef } from 'react';

function useSequentialReveal(
  completions: boolean[],
  initialIndex = 0
): boolean[] {
  const maxIndexRef = useRef<number>(initialIndex);

  completions.forEach((isComplete, idx) => {
    if (isComplete && idx > maxIndexRef.current) {
      maxIndexRef.current = idx;
    }
  });

  return completions.map((_, idx) => idx <= maxIndexRef.current);
}

export default useSequentialReveal;
