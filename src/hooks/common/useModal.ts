import { useCallback, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    setIsVisible(true);
  }, []);

  const close = useCallback(() => {
    setIsVisible(false);

    setTimeout(() => {
      setIsOpen(false);
    }, 600);
  }, []);

  return {
    isModalOpen: isOpen,
    isVisible,
    openModal: open,
    closeModal: close,
  };
};

export { useModal };
