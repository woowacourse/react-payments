import { CardChipIcon } from '../../assets/images';
import type { CardInfo } from '../../types/card';

import styles from './card.module.css';

const Card = ({
  cardNumber1,
  cardNumber2,
  cardNumber3,
  cardNumber4,
  owner,
  expiredMonth,
  expiredYear,
}: CardInfo) => {
  return (
    <div className={styles.container}>
      <CardChipIcon width={31} height={27} />
      <div className={styles.cardNumber}>
        <span className={styles.number}>{cardNumber1}</span>
        <span className={styles.number}>{cardNumber2}</span>
        <span className={styles.password}>
          {cardNumber3 !== undefined
            ? '﹒'.repeat(cardNumber3.length)
            : '﹒﹒﹒﹒'}
        </span>
        <span className={styles.password}>
          {cardNumber4 !== undefined
            ? '﹒'.repeat(cardNumber4.length)
            : '﹒﹒﹒﹒'}
        </span>
      </div>
      <div className={styles.detailContainer}>
        <p>{owner}</p>
        <p>
          {expiredMonth}
          {expiredMonth.length === 2 && <span>/</span>}
          {expiredYear}
        </p>
      </div>
    </div>
  );
};

export default Card;
