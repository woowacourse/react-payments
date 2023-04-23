import { KeyboardEvent, useCallback, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onClosePress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  return {
    isModalOpen: isOpen,
    openModal: open,
    closeModal: close,
    onModalClosePress: onClosePress,
  };
};

export { useModal };
