import { useEffect, useState } from 'react';

const ONE_SECOND = 1000;

const useCountdown = (initialCount: number, onFinish: () => void) => {
  const [count, setCount] = useState(initialCount);
  const intervals = Array.from(
    { length: initialCount },
    (_, index) => (index + 1) * ONE_SECOND,
  );

  useEffect(() => {
    const timeoutIds = intervals.map((interval, index) => {
      return setTimeout(() => {
        setCount(initialCount - index - 1);

        if (index === intervals.length - 1) {
          onFinish();
        }
      }, interval);
    });

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  return { count } as const;
};

export default useCountdown;
