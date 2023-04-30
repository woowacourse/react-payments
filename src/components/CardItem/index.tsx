import { CardChipIcon } from '../../assets/images';
import useCardFormValue from '../../hooks/useCardFormValue';
import type { CardData } from '../../types/card';

import styles from './cardItem.module.css';

const COMPANY_NAME = {
  BC카드: 'bc',
  신한카드: 'shinhan',
  카카오뱅크: 'kakaobank',
  현대카드: 'hyundai',
  우리카드: 'woori',
  롯데카드: 'lotte',
  하나카드: 'hana',
  국민카드: 'kb',
};

interface Props {
  cardData?: CardData;
}

const CardItem = ({ cardData }: Props) => {
  const { company, number, owner, expiredDate } =
    cardData ?? useCardFormValue();

  return (
    <div
      className={`${styles.container} ${
        company ? styles[COMPANY_NAME[company]] : ''
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
