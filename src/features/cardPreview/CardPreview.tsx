import styles from './CardPreview.module.css';

import MastercardSvg from '@/core/assets/Mastercard.svg?react';
import VisaSvg from '@/core/assets/Visa.svg?react';

import { CARD_BRAND_FORMAT, getBrand } from '@/entities/card/brand';
import type { Brand } from '@/entities/card/brand';

import type { ExpirationDate } from '@/entities/card/types';

export interface CardInfo {
  cardNumbers: string[];
  expirationDate: ExpirationDate;
}
export interface CardPreviewProps {
  info: CardInfo;
}

const BrandMap = {
  visa: <VisaSvg />,
  mastercard: <MastercardSvg />,
  default: undefined,
};

const STAR = '●';

const CardNumber = ({ cardNumbers, brand }: { cardNumbers: string[]; brand: Brand }) => {
  const INPUT_FORMAT = CARD_BRAND_FORMAT[brand];

  return (
    <>
      {INPUT_FORMAT.map((size, i) => (
        <span key={`${brand}-card-number-${size}-${i}`} className={styles.cardNumberSection}>
          {i >= 2 ? STAR.repeat(cardNumbers[i]?.length ?? 0) : (cardNumbers[i] ?? '')}
        </span>
      ))}
    </>
  );
};

export const CardPreview = ({ info }: CardPreviewProps) => {
  const { cardNumbers, expirationDate } = info;
  const brand = getBrand(cardNumbers.join(''));

  return (
    <div className={styles.cardPreview}>
      <div className={styles.card}>
        <div className={styles.brand}>{BrandMap[brand]}</div>
        <div className={styles.number}>
          <CardNumber cardNumbers={cardNumbers} brand={brand} />
        </div>
        <div className={styles.expirationDate}>
          {expirationDate.month && <span>{expirationDate.month}/</span>}
          {expirationDate.year}
        </div>
      </div>
    </div>
  );
};
