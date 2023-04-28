import styles from './ModalBottomSheet.module.css';
import { useContext } from 'react';
import { ModalContext } from '../../../contexts/ModalProvider';
const ModalBottomSheet = () => {
  const { isOpen, content, closeModal } = useContext(ModalContext);

  return (
    <dialog className={styles.modal} open={isOpen}>
      <div className={styles['modal-backdrop']} onClick={closeModal}></div>
      <div className={styles['modal-body']}>{content}</div>
    </dialog>
  );
};

export default ModalBottomSheet;
