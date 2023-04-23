import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

interface Props {
  children: ReactNode;
}

const Modal = ({ children }: Props) => {
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
      <div className={styles.container}>{children}</div>
    </div>,
    document.body,
  );
};

export default Modal;
