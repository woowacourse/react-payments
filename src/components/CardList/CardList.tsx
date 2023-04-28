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
          <li className={styles.card} key={crypto.randomUUID()}>
            <CardPreview
              cardNumber={card.cardNumber}
              cardOwnerName={card.cardOwnerName}
              expirationDate={card.expirationDate}
              selectedCard={card.selectedCard}
            />
            <div className={styles.cardNicknameBox}>
              <span>{card.cardNickName}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
