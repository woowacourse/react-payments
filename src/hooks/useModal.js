import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClosed = () => setIsModalOpen(false);

  return { isModalOpen, handleModalOpen, handleModalClosed };
};
