import type { Card } from '@/entities/card/model/card';
import { CardItem } from '@/entities/card/ui/CardItem';

import styles from './CardList.module.css';

interface CardListProps {
  cards: Card[];
  onAddCard: () => void;
  onDelete: (id: string) => void;
}

export const CardList = ({ cards, onAddCard, onDelete }: CardListProps) => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>보유 카드 ({cards.length})</h1>
      <ul className={styles.list}>
        {cards.map((card) => (
          <li key={card.id}>
            <CardItem card={card} onDelete={onDelete} />
          </li>
        ))}
        <li>
          <button className={styles.addButton} type="button" onClick={onAddCard}>
            + 카드 추가
          </button>
        </li>
      </ul>
    </section>
  );
};
