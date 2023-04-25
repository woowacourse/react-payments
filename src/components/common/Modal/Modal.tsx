import styles from './style.module.css';
import { ComponentPropsWithoutRef, ReactNode, useEffect, useRef } from 'react';
import { useScrollStop } from '../../../hooks/common/useScrollStop';

interface ModalProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
}

function Modal({ isOpen, children, close, onKeyDown }: ModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  useScrollStop(isOpen);

  useEffect(() => {
    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.backdrop} onClick={close} />
      <div ref={modalContainerRef} className={styles.content} onKeyDown={onKeyDown} tabIndex={0}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
