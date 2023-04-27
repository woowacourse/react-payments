import styles from './style.module.css';
import {
  ComponentPropsWithRef,
  ForwardedRef,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import { useScrollStop } from '../../../hooks/common/useScrollStop';

interface ModalProps extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
}

function Modal(
  { isOpen, children, close, onKeyDown }: ModalProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  useScrollStop(isOpen);

  useEffect(() => {
    if (modalContainerRef.current) {
      modalContainerRef.current.focus();
    }
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.backdrop} onClick={close} />
      <div ref={modalContainerRef} className={styles.content} onKeyDown={onKeyDown} tabIndex={0}>
        {children}
      </div>
    </div>
  );
}

export default forwardRef(Modal);
