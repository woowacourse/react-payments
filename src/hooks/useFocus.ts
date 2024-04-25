import { useEffect, useRef } from 'react';

const useFocus = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleAddElementInRef = (element: T) => {
    ref.current = element;
  };

  return handleAddElementInRef;
};

export default useFocus;
