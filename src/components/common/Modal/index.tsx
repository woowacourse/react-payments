import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import useModal from './useModal';

import styles from './modal.module.css';

interface Props {
  children: ReactNode;
}

const ANIMATION_DURATION = 300;

const Modal = ({ children }: Props) => {
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

  const handleEscapeKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleModalClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleEscapeKeydown);

    return () =>
      document.body.removeEventListener('keydown', handleEscapeKeydown);
  }, []);

  if (isModalOpen === false && isVisible === false && isAnimating === false) {
    return null;
  }

  return createPortal(
    <div role="dialog" aria-modal>
      <div className={styles.backdrop} onClick={handleModalClose} />
      <div className={styles.container}>{children}</div>
    </div>,
    document.body,
  );
};

export default Modal;
