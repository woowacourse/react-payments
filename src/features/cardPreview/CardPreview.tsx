import styles from './CardPreview.module.css';
import bankStyles from '@/entities/card/bank.module.css';

import AmericanExpressSvg from '@/core/assets/AmericanExpress.svg?react';
import DinersSvg from '@/core/assets/Diners.svg?react';
import UnionPaySvg from '@/core/assets/UnionPay.svg?react';
import MastercardSvg from '@/core/assets/Mastercard.svg?react';
import VisaSvg from '@/core/assets/Visa.svg?react';

import { getBrand, RULES, type Brand } from '@/entities/card/brand';
import type { ExpiryDate } from '@/entities/card/expiryDate';
import type { ReactNode } from 'react';
import type { Bank } from '@/entities/card/bank';

export interface CardInfo {
  cardNumbers: string[];
  expiryDate: ExpiryDate;
  bank: Bank;
}
interface CardPreviewProps {
  info: CardInfo;
}

const BRAND_SVG_MAP: Record<Brand, ReactNode> = {
  VISA: <VisaSvg />,
  MASTERCARD: <MastercardSvg />,
  AMEX: <AmericanExpressSvg />,
  DINERS: <DinersSvg />,
  UNIONPAY: <UnionPaySvg />,
  UNKNOWN: undefined,
};

const STAR = '●';

const CardNumber = ({ cardNumbers, brand }: { cardNumbers: string[]; brand: Brand }) => {
  const INPUT_FORMAT = RULES[brand].format;
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
  const { cardNumbers, expiryDate, bank = 'unknown' } = info;
  const brand = getBrand(cardNumbers.join(''));

  return (
    <div className={styles.cardPreview}>
      <div className={`${styles.card} ${bankStyles[bank]}`}>
        <div className={styles.brand}>{BRAND_SVG_MAP[brand]}</div>
        <div className={styles.number}>
          <CardNumber cardNumbers={cardNumbers} brand={brand} />
        </div>
        <div className={styles.ExpiryDate}>
          {expiryDate.month && <span>{expiryDate.month}/</span>}
          {expiryDate.year}
        </div>
      </div>
    </div>
  );
};
