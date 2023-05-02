import { useEffect } from 'react';

export const useModal = (setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleEscPress = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return closeModal;
};
