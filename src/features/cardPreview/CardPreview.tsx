import styles from './CreditCard.module.css';

import MastercardSvg from '@/core/assets/Mastercard.svg?react';
import VisaSvg from '@/core/assets/Visa.svg?react';

import type { CardNumbers, ExpirationDate } from '../../pages/payments/types';

export interface DefaultCreditCardProps {
  cardBrand: 'default' | 'visa' | 'mastercard';
  cardNumbers: CardNumbers;
  expirationDate: ExpirationDate;
}

const BrandMap = {
  visa: <VisaSvg />,
  mastercard: <MastercardSvg />,
  default: undefined,
};

const STAR = '●';

export const CardPreview = ({ cardBrand = 'default', cardNumbers, expirationDate }: DefaultCreditCardProps) => {
  return (
    <div className={styles.cardPreview}>
      <div className={styles.card}>
        <div className={styles.brand}>{BrandMap[cardBrand]}</div>
        <div className={styles.number}>
          <span>{cardNumbers.first}</span>
          <span>{cardNumbers.second}</span>
          <span>{STAR.repeat(cardNumbers.third.length)}</span>
          <span>{STAR.repeat(cardNumbers.fourth.length)}</span>
        </div>
        <div className={styles.expirationDate}>
          {expirationDate.month && <span>{expirationDate.month}/</span>}
          {expirationDate.year}
        </div>
      </div>
    </div>
  );
};
