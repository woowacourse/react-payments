import { useEffect, useRef, useState } from 'react';

import useModal from './useModal';

const ANIMATION_DURATION = 300;

const useModalAnimation = () => {
  const { isModalOpen, closeModal } = useModal();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(isModalOpen);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleModalClose = () => {
    setIsVisible(false);

    setTimeout(() => {
      closeModal();
    }, ANIMATION_DURATION);
  };

  useEffect(() => {
    setIsVisible(isModalOpen);

    if (isVisible && !isModalOpen) {
      setIsAnimating(true);

      timeoutId.current = setTimeout(() => {
        setIsAnimating(false);
      }, ANIMATION_DURATION);
    }

    return () => {
      setIsVisible(false);

      if (!timeoutId.current) return;
      clearTimeout(timeoutId.current);
    };
  }, [isModalOpen]);

  return {
    isModalOpen,
    isVisible,
    isAnimating,
    handleModalClose,
  };
};

export default useModalAnimation;
