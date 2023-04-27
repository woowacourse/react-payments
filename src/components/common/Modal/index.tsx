import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  return createPortal(
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      {children}
    </>,
    document.getElementById('modal-root') as HTMLDivElement,
  );
};

export default Modal;
