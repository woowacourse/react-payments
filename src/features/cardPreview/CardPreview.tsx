import styles from './CardPreview.module.css';

import MastercardSvg from '@/core/assets/Mastercard.svg?react';
import VisaSvg from '@/core/assets/Visa.svg?react';

import { CARD_BRAND_FORMAT } from '@/entities/card/brand';
import type { Brand } from '@/entities/card/brand';

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
          <CardNumber cardNumbers={cardNumbers} brand={cardBrand} />
        </div>
        <div className={styles.expirationDate}>
          {expirationDate.month && <span>{expirationDate.month}/</span>}
          {expirationDate.year}
        </div>
      </div>
    </div>
  );
};
