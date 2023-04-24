import styles from './style.module.css';
import { MouseEvent } from 'react';
import { Issuer } from '../../../../../types';
import { CARD_ISSUER_LOGO_IMAGE } from '../../../../../constants/images';

interface CardIssuerOptionProps {
  issuer: Issuer;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

function CardIssuerOption({ issuer, onClick }: CardIssuerOptionProps) {
  return (
    <button type="button" name="issuer" value={issuer} className={styles.button} onClick={onClick}>
      <img src={CARD_ISSUER_LOGO_IMAGE[issuer]} alt={`${issuer} 로고`}></img>
      <span>{issuer}</span>
    </button>
  );
}

export default CardIssuerOption;
