import { useCallback, useState } from 'react';

const useModal = (isShow: boolean) => {
  const [isOpen, setIsOpen] = useState(isShow);

  const openModal = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
