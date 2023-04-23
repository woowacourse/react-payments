import { CARD_ISSUER_LOGO_IMAGE } from '../../../../../constants/images';
import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';

interface CardIssuerOptionProps extends ComponentPropsWithoutRef<'div'> {
  issuer: string;
}

function CardIssuerOption({ issuer }: CardIssuerOptionProps) {
  return (
    <div className={styles.container}>
      <img src={CARD_ISSUER_LOGO_IMAGE[issuer]} alt={`${issuer} 로고`}></img>
      <caption>{issuer}</caption>
    </div>
  );
}

export default CardIssuerOption;
