import styles from './ModalBottomSheet.module.css';
import { ReactNode } from 'react';

type ModalBottomSheetProps = {
  isModalOpen: boolean;
  sheetHeight: string;
  children?: ReactNode;
};

const ModalBottomSheet = ({ isModalOpen, sheetHeight, children }: ModalBottomSheetProps) => {
  return isModalOpen ? (
    <div className={styles.container}>
      <div className={styles.modal} style={{ height: sheetHeight }}>
        {children}
      </div>
    </div>
  ) : null;
};

export default ModalBottomSheet;
