import styles from './style.module.css';
import { MouseEvent } from 'react';
import { Issuer } from '../../../../../types';
import { CARD_ISSUER_LOGO_IMAGE } from '../../../../../constants/images';

interface CardIssuerOptionProps {
  issuer: Issuer;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

function CardIssuerOption({ issuer, onClick }: CardIssuerOptionProps) {
  return (
    <div data-value={issuer} className={styles.container} onClick={onClick}>
      <img src={CARD_ISSUER_LOGO_IMAGE[issuer]} alt={`${issuer} 로고`}></img>
      <p>{issuer}</p>
    </div>
  );
}

export default CardIssuerOption;
