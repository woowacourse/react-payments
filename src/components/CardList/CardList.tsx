import styles from './style.module.css';
import { Card } from '../../types';
import CardItem from '../CardItem/CardItem';

interface CardListProps {
  cardList: Card[];
}

function CardList({ cardList }: CardListProps) {
  return (
    <div className={styles.container}>
      {cardList.length ? (
        <div className={styles.listContainer}>
          {cardList.map((card) => (
            <CardItem information={card} />
          ))}
        </div>
      ) : (
        <h4 className={styles.emptyListMessage}>새로운 카드를 등록해주세요.</h4>
      )}
    </div>
  );
}

export default CardList;
