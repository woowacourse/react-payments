import CardPreview from '../common/CardPreview/CardPreview';
import { CardInfo } from '../../types';
import styles from './CardList.module.css';
import { cardImages } from '../../pages/cardImages';

type CardListProps = {
  cardInfo: CardInfo[];
};

const CardList = ({ cardInfo }: CardListProps) => {
  return (
    <div className={styles.container}>
      <ul>
        {cardInfo.map(card => (
          <li className={styles.card} key={crypto.randomUUID()}>
            <CardPreview
              cardNumber={card.cardNumber}
              cardOwnerName={card.cardOwnerName}
              cardExpirationDate={card.cardExpirationDate}
              image={cardImages[card.cardIssuer]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
