import { CardChip } from '../../assets/svg';
import type { CardCompany, CardInfo } from '../../domain/types/card';

import styles from './card.module.css';

const CARD_COMPANY_CLASSNAMES = {
  BC카드: 'bc-card',
  신한카드: 'shinhan-card',
  카카오뱅크: 'kakaobank-card',
  현대카드: 'hyundai-card',
  우리카드: 'woori-card',
  롯데카드: 'lotte-card',
  하나카드: 'hana-card',
  국민카드: 'kb-card',
  default: 'hyundai-card',
};

type Props = CardInfo & {
  cardCompany: CardCompany | null;
  onClick?: () => void;
};

const Card = ({
  cardCompany,
  cardNumber1,
  cardNumber2,
  cardNumber3,
  cardNumber4,
  owner,
  expiredMonth,
  expiredYear,
  onClick,
}: Props) => {
  return (
    <div
      className={`${styles.container} ${
        cardCompany && CARD_COMPANY_CLASSNAMES[cardCompany]
      }`}
      onClick={onClick}
    >
      <span className={styles.cardCompany}>{cardCompany}</span>
      <CardChip />
      <div className={`${styles.cardNumber} text-card-number`}>
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
        <p className="text-card-detail">{owner}</p>
        <p className="text-card-detail">
          {expiredMonth}
          {expiredMonth.length === 2 && <span>/</span>}
          {expiredYear}
        </p>
      </div>
    </div>
  );
};

export default Card;
