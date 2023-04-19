import { Card } from '../../types';
import CardItem from '../CardItem/CardItem';
import styles from './style.module.css';

interface CardListProps {
  cardList: Card[];
}

function CardList({ cardList }: CardListProps) {
  return (
    <>
      {cardList.length ? (
        cardList.map((card) => <CardItem information={card} />)
      ) : (
        <h4 className={styles.emptyListMessage}>새로운 카드를 등록해주세요.</h4>
      )}
    </>
  );
}

export default CardList;
