import styles from './style.module.css';
import { ComponentPropsWithoutRef, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useModalContext } from '../../../contexts/ModalContext';
import { useScrollStop } from '../../../hooks/common/useScrollStop';

interface ModalProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

function Modal({ children, onKeyDown }: ModalProps) {
  const { isModalOpen, isVisible, closeModal } = useModalContext();
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollStop(isModalOpen);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
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
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
