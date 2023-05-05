import CardPreview from '../common/CardPreview/CardPreview';
import { CardInfo } from '../../types';
import styles from './CardList.module.css';
import { cardImages } from '../../pages/cardImages';
import AddCardButton from './AddCardButton/AddCardButton';

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
              cardIssuer={card.cardIssuer}
              cardName={card.cardName}
              cardNumber={card.cardNumber}
              cardOwnerName={card.cardOwnerName}
              cardExpirationDate={card.cardExpirationDate}
              image={cardImages[card.cardIssuer]}
            />
          </li>
        ))}
      </ul>
      <AddCardButton showMessage={cardInfo.length === 0} />
    </div>
  );
};

export default CardList;
