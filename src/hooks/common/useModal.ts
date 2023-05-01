import { useCallback, useState } from "react";
import type { KeyboardEvent } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    setIsVisible(true);
  }, []);

  const close = useCallback(() => {
    setIsVisible(false);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosed(true);
    }, 600);
  }, []);

  const reset = useCallback(() => {
    setIsClosed(false);
  }, []);

  const handleClosePress = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === "Escape") {
        close();
      }
    },
    [close]
  );

  return {
    isModalOpen: isOpen,
    isModalClosed: isClosed,
    isVisible,
    openModal: open,
    closeModal: close,
    resetModal: reset,
    handleClosePress,
  };
};

export { useModal };
