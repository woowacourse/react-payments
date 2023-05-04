import { useEffect, useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEscPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return { isModalOpen, showModal, closeModal };
};
