import IMAGES from '../../assets/images';
import { CARD_COLOR, CARD_MARK } from '../../constants';

import styles from './style.module.css';

interface CardPreviewProps {
  cardNumbers: string[];
  period: {
    month: string;
    year: string;
  };
  userName: string;
}

function CardPreview({ cardNumbers, period, userName }: CardPreviewProps) {
  const maskCardNumbers = () =>
    cardNumbers
      .map((number, index) => {
        if (index > 1) {
          return number.replace(/\d/g, '·');
        }
        return number;
      })
      .join(' ');

  function getCardCompanyMark(): 'visa' | 'master' | 'etc' {
    const firstGroup = cardNumbers[0];
    if (!firstGroup) return 'etc';

    const visaRegex = /^4[0-9]{15}$/;
    const masterCardRegex = /^(5[1-5][0-9]{14})$/;

    const cardNumber = cardNumbers.join('');

    if (visaRegex.test(cardNumber)) {
      return 'visa';
    }
    if (masterCardRegex.test(cardNumber)) {
      return 'master';
    }
    return 'etc';
  }

  return (
    <div className={styles.cardPreview}>
      <div
        className={styles.cardImg}
        style={{ backgroundColor: CARD_COLOR.default }}
      >
        <div className={styles.cardImgInner}>
          <section className={styles.top}>
            <img src={IMAGES.cardChip} alt="card chip" />
            <img
              src={CARD_MARK[getCardCompanyMark()].src}
              alt={CARD_MARK[getCardCompanyMark()].alt}
            />
          </section>
          <section className={styles.info}>
            <div className="card-number">{maskCardNumbers()}</div>
            <div className="period">
              {period.month && period.month.padStart(2, '0')}
              {period.month && period.year ? '/' : ''}
              {period.year}
            </div>
            <div className={styles.user}>{userName}</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
