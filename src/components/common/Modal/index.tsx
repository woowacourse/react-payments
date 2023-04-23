import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import useModalAnimation from './useModalAnimation';

import styles from './modal.module.css';

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
  const { isModalOpen, isVisible, isAnimating, handleModalClose } =
    useModalAnimation();

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

  if (isModalOpen === false && isVisible === false && isAnimating === false)
    return null;

  return createPortal(
    <div role="dialog" aria-modal>
      <div className={styles.backdrop} onClick={handleModalClose} />
      <div
        className={
          isVisible
            ? `${styles.container} ${styles.slideUp}`
            : `${styles.container}`
        }
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
