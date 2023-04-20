import CardPreview from '../CardPreview/CardPreview';
import { CardInfo } from '../../types';
import styles from './CardList.module.css';

type CardListProps = {
  cardInfo: CardInfo[];
};

const CardList = ({ cardInfo }: CardListProps) => {
  return (
    <div className={styles.container}>
      <ul>
        {cardInfo.map(card => (
          <li className={styles.card}>
            <CardPreview
              key={crypto.randomUUID()}
              cardNumber={card.cardNumber}
              cardOwnerName={card.cardOwnerName}
              cardExpirationDate={card.cardExpirationDate}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
