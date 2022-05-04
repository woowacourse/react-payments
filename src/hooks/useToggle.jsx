import { useState, useCallback } from 'react';

export default function useToggle(initialValue) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return [isOpen, handler];
}
