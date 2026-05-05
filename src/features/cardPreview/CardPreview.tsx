import styles from './CardPreview.module.css';

import MastercardSvg from '@/core/assets/Mastercard.svg?react';
import VisaSvg from '@/core/assets/Visa.svg?react';

import type { ExpirationDate } from '@/entities/card/types';

export interface DefaultCardPreviewProps {
  cardBrand: 'default' | 'visa' | 'mastercard';
  cardNumbers: string[];
  expirationDate: ExpirationDate;
}

const BrandMap = {
  visa: <VisaSvg />,
  mastercard: <MastercardSvg />,
  default: undefined,
};

const STAR = '●';

const FourCardNumber = ({ cardNumbers }: { cardNumbers: string[] }) => {
  return (
    <>
      <span>{cardNumbers[0]}</span>
      <span>{cardNumbers[1]}</span>
      <span>{STAR.repeat(cardNumbers[2].length)}</span>
      <span>{STAR.repeat(cardNumbers[3].length)}</span>
    </>
  );
};

export const CardPreview = ({
  cardBrand = 'default',
  cardNumbers,
  expirationDate,
}: DefaultCardPreviewProps) => {
  return (
    <div className={styles.cardPreview}>
      <div className={styles.card}>
        <div className={styles.brand}>{BrandMap[cardBrand]}</div>
        <div className={styles.number}>
          <FourCardNumber cardNumbers={cardNumbers} />
        </div>
        <div className={styles.expirationDate}>
          {expirationDate.month && <span>{expirationDate.month}/</span>}
          {expirationDate.year}
        </div>
      </div>
    </div>
  );
};
