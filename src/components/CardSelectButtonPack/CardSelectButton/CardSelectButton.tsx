import React from 'react';
import { useContext, useCallback } from 'react';
import { ModalContext } from '../../../contexts/ModalProvider';
import { CardInfoContext } from '../../../contexts/CardInfoProvider';
import styles from './CardSelectButton.module.css';
import { CardIssuerType } from '../../../types';

type CardSelectButtonProps = {
  title: CardIssuerType;
  src: string;
};

const CardSelectButton = ({ title, src }: CardSelectButtonProps) => {
  const { closeModal } = useContext(ModalContext);
  const { setCardIssuer } = useContext(CardInfoContext);

  const onClick = useCallback(() => {
    setCardIssuer(title);
    closeModal();
  }, [title, closeModal, setCardIssuer]);

  return (
    <button className={styles.button} onClick={onClick}>
      <img className={styles.logo} src={src} alt={title} />
      <span className={styles.title}>{title}</span>
    </button>
  );
};

export default React.memo(CardSelectButton);
