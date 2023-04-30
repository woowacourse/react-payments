import { CardChipIcon } from '../../assets/images';
import { COMPANY_INFO } from '../../constants/company';
import useCardFormValue from '../../hooks/useCardFormValue';
import type { CardData } from '../../types/card';

import styles from './cardItem.module.css';

interface Props {
  cardData?: CardData;
}

const CardItem = ({ cardData }: Props) => {
  const { company, number, owner, expiredDate } =
    cardData ?? useCardFormValue();

  return (
    <div
      className={`${styles.container} ${
        company ? styles[COMPANY_INFO[company].className] : ''
      }`}
    >
      <p className={styles.company}>{company ?? ''}</p>
      <CardChipIcon width={31} height={27} />
      <div className={styles.cardNumber}>
        <span className={styles.number}>{number.first}</span>
        <span className={styles.number}>{number.second}</span>
        <span className={styles.password}>
          {'third' in number ? '﹒'.repeat(number.third.length) : '﹒﹒﹒﹒'}
        </span>
        <span className={styles.password}>
          {'fourth' in number ? '﹒'.repeat(number.fourth.length) : '﹒﹒﹒﹒'}
        </span>
      </div>
      <div className={styles.detailContainer}>
        <p>{owner}</p>
        <p>
          {expiredDate.month}
          {expiredDate.month.length === 2 && <span>/</span>}
          {expiredDate.year}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
