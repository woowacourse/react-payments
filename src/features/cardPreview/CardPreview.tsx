import styles from './CardPreview.module.css';
import bankStyles from '@/entities/card/bank/bank.module.css';

import { RULES, type Brand } from '@/entities/card/brand/brand';
import type { ExpiryDate } from '@/entities/card/expiryDate';
import type { Bank } from '@/entities/card/bank/bank';
import { BRAND_SVG_MAP } from '@/entities/card/brand/brandSvgMap';

export interface CardInfo {
  cardNumbers: string[];
  expiryDate: ExpiryDate;
  bank: Bank;
  brand: Brand;
}
interface CardPreviewProps {
  info: CardInfo;
}

const STAR = '●';

const CardNumber = ({ cardNumbers, brand }: { cardNumbers: string[]; brand: Brand }) => {
  const INPUT_FORMAT = RULES[brand].format;
  return (
    <>
      {INPUT_FORMAT.map((_, i) => (
        <span key={`card-number-${i}`} className={styles.cardNumberSection}>
          {i >= 2 ? STAR.repeat(cardNumbers[i]?.length ?? 0) : (cardNumbers[i] ?? '')}
        </span>
      ))}
    </>
  );
};

export const CardPreview = ({ info }: CardPreviewProps) => {
  const { cardNumbers, expiryDate, bank = 'unknown', brand } = info;

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
