import { useEffect } from 'react';

export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  onIntersect: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = { threshold: 1 },
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => onIntersect?.(e.isIntersecting), options);

    const $element = ref.current;
    if (!$element) return;

    observer.observe($element);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve($element);
    };
  }, [ref, onIntersect, options]);
};
