import { useState } from 'react';

export default function useModal(initialValue) {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);

  const handler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return [isModalOpen, handler];
}
