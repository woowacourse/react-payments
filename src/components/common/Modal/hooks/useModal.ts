import { useState } from 'react';

const ANIMATION_DURATION = 300;

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsModalOpen(false);
    }, ANIMATION_DURATION);
  };

  return {
    isModalOpen,
    isClosing,
    openModal,
    closeModal,
  };
};

export default useModal;
