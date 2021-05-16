import { useRef } from 'react';

// 참고 : https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940
const useDebounceCallback = <F extends (...args: any[]) => any>(callback: F, wait: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const cleanup = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  return (...args: Parameters<F>) => {
    cleanup();

    timer.current = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

export default useDebounceCallback;
