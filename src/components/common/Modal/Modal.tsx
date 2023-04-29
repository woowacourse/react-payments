import styles from './style.module.css';
import { ComponentPropsWithoutRef, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModalContext } from '../../../contexts/ModalContext';
import { useScrollStop } from '../../../hooks/common/useScrollStop';

interface ModalProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const { isModalOpen, isVisible, closeModal, handleClosePress } = useModalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollStop(isModalOpen);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  return createPortal(
    <div role="dialog" aria-modal className={styles.container}>
      <div
        className={`${styles.backdrop} ${isVisible ? styles.openBackdrop : styles.closeBackdrop}`}
        onClick={closeModal}
      />
      <div
        ref={containerRef}
        className={`${styles.content} ${isVisible ? styles.openModal : styles.closeModal}`}
        onKeyDown={handleClosePress}
        tabIndex={0}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
