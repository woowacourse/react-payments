import bankColorStyles from '@/entities/card/config/bank.module.css';
import { BANK_RULES, getBankByIssuerCode } from '@/entities/card/model/bank';
import type { Card } from '@/entities/card/model/card';

import styles from './CardItem.module.css';

interface CardItemProps {
  card: Card;
  onDelete: (id: string) => void;
}

export const CardItem = ({ card, onDelete }: CardItemProps) => {
  const bank = getBankByIssuerCode(card.issuerCode);
  const bankRule = bank !== undefined ? BANK_RULES[bank] : undefined;

  return (
    <article className={styles.item}>
      <div className={`${styles.colorChip} ${bankColorStyles[bankRule?.color ?? 'unknown']}`} />
      <div className={styles.content}>
        <p className={styles.bank}>{bankRule?.label ?? '알 수 없는 카드사'}</p>
        <p className={styles.number}>{card.number}</p>
        <p className={styles.expirationDate}>유효기간 {card.expirationDate}</p>
      </div>
      <button
        className={styles.deleteButton}
        type="button"
        aria-label={`${bankRule?.label ?? '카드'} 삭제`}
        onClick={() => onDelete(card.id)}
      >
        ×
      </button>
    </article>
  );
};
