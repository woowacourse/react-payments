import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useModalContext } from './ModalContext';

import styles from './modal.module.css';

const Modal = ({ children }: PropsWithChildren) => {
  const { isClosing, closeModal } = useModalContext();

  const handleEscapeKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleEscapeKeydown);

    return () =>
      document.body.removeEventListener('keydown', handleEscapeKeydown);
  }, []);

  return createPortal(
    <div role="dialog" aria-modal>
      <div className={styles.backdrop} onClick={closeModal} />
      <div
        className={
          isClosing
            ? `${styles.container}`
            : `${styles.container} ${styles.slideUp}`
        }
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
