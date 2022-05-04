import { useState, useCallback } from 'react';

export default function useModal(initialValue) {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);

  const handler = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  return [isModalOpen, handler];
}
