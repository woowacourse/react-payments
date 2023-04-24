import { useEffect, useRef, useState } from 'react';

const ANIMATION_DURATION = 300;

const useModalAnimation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openModal = () => {
    setIsVisible(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsVisible(false);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (isVisible && !isModalOpen) {
      setIsAnimating(true);

      timeoutId.current = setTimeout(() => {
        setIsAnimating(false);

        if (isModalOpen) {
          setIsVisible(true);
        }
      }, ANIMATION_DURATION);
    }

    if (!isModalOpen) {
      setIsVisible(false);
    }

    return () => {
      if (!timeoutId.current) return;
      clearTimeout(timeoutId.current);
    };
  }, [isModalOpen]);

  return {
    isModalOpen,
    isVisible,
    isAnimating,
    openModal,
    closeModal,
  };
};

export default useModalAnimation;
