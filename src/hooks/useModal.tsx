import { useState } from 'react';

export default function useModal(initialValue: boolean) {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);

  const handler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return { isModalOpen, toggleIsModalOpen: handler };
}
