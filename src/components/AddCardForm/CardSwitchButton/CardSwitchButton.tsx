import { ReactNode, useContext } from 'react';
import { ModalContext } from '../../../ModalProvider';
import { FaCreditCard } from 'react-icons/fa';
import styles from './CardSwitchButton.module.css';

type CardSwitchButtonProps = {
  modalContent: ReactNode;
  top?: string;
  left?: string;
};

const CardSwitchButton = ({ modalContent, top = '0', left = '0' }: CardSwitchButtonProps) => {
  const { openModal } = useContext(ModalContext);

  return (
    <button
      type="button"
      className={styles.button}
      style={{ left: left, top: top }}
      onClick={() => openModal(modalContent)}
    >
      <FaCreditCard className={styles.icon} />
      <span className={styles.title}>카드사 변경</span>
    </button>
  );
};

export default CardSwitchButton;
