import { ReactNode, useContext } from 'react';
import { ModalContext } from '../../../ModalProvider';
import { FaCreditCard } from 'react-icons/fa';
import styles from './CardSwitchButton.module.css';

type CardSwitchButtonProps = {
  modalContent: ReactNode;
};

const CardSwitchButton = ({ modalContent }: CardSwitchButtonProps) => {
  const { openModal } = useContext(ModalContext);

  return (
    <button type="button" className={styles.button} onClick={() => openModal(modalContent)}>
      <FaCreditCard className={styles.icon} />
      <span className={styles.title}>카드사 변경</span>
    </button>
  );
};

export default CardSwitchButton;
