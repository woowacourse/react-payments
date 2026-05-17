import styles from './CardPreview.module.css';
import bankStyles from '@/entities/card/config/bank.module.css';

import type { ExpiryDate } from '@/entities/card/model/expiryDate';
import { BANK_RULES, type Bank } from '@/entities/card/model/bank';
import { BRAND_SVG_MAP } from '@/entities/card/config/brandSvgMap';
import { getCardBrand, type CardBrand } from '@/entities/card/model/cardNumber';
import { getPreviewCardNumbers } from './model/cardPreview';

export interface CardInfo {
  numbers: string[];
  expiryDate: ExpiryDate;
  bank: Bank | undefined;
}
interface CardPreviewProps {
  info: CardInfo;
}

const CardNumber = ({
  cardNumbers,
  brand,
}: {
  cardNumbers: string;
  brand: CardBrand | undefined;
}) => {
  const previewNumbers = getPreviewCardNumbers(cardNumbers, brand);
  return (
    <>
      {previewNumbers.map((number, index) => (
        <span key={`card-number-${index}`} className={styles.cardNumberSection}>
          {number}
        </span>
      ))}
    </>
  );
};

export const CardPreview = ({ info }: CardPreviewProps) => {
  const { numbers, expiryDate, bank } = info;

  const cardNumbers = numbers.join('');
  const brand = getCardBrand(cardNumbers);
  const brandImg = brand !== undefined ? BRAND_SVG_MAP[brand] : '';

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
