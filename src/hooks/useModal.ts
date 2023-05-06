import { useState } from 'react';

const useModal = (initialModalState: boolean) => {
  const [isModalOpen, setIsModalOpen] = useState(initialModalState);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
