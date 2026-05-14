import styles from './CardPreview.module.css';
import bankStyles from '@/entities/card/bank/bank.module.css';

import { BRAND_RULES, type Brand } from '@/entities/card/brand/brand';
import type { ExpiryDate } from '@/entities/card/expiryDate';
import { BANK_RULES, type Bank } from '@/entities/card/bank/bank';
import { BRAND_SVG_MAP } from '@/entities/card/brand/brandSvgMap';

export interface CardInfo {
  cardNumbers: string[];
  expiryDate: ExpiryDate;
  brand: Brand;
  bank: Bank | undefined;
}
interface CardPreviewProps {
  info: CardInfo;
}

const STAR = '●';

const CardNumber = ({ cardNumbers, brand }: { cardNumbers: string[]; brand: Brand }) => {
  const INPUT_FORMAT = BRAND_RULES[brand].format;
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
  const { cardNumbers, expiryDate, brand, bank } = info;
  const brandImg = BRAND_SVG_MAP[brand];
  const bankClassName = bank !== undefined ? BANK_RULES[bank].className : '';

  return (
    <div className={styles.cardPreview}>
      <div className={`${styles.card} ${bankStyles[bankClassName]}`}>
        {brandImg && <img src={brandImg} alt={brand} className={styles.brand} />}
        <div className={styles.number}>
          <CardNumber cardNumbers={cardNumbers} brand={brand} />
        </div>
        <div className={styles.ExpiryDate}>
          {expiryDate.month && <span>{expiryDate.month}/</span>}
          <span>{expiryDate.year}</span>
        </div>
      </div>
    </div>
  );
};
