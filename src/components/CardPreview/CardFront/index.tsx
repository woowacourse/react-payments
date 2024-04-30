import IMAGES from '../../../assets/images';
import { CARD_COLOR, CARD_MARK, INPUT_LENGTH } from '../../../constants';
import { CARD_MARK_REGEX } from '../../../constants/regex';

import styles from './style.module.css';

interface CardFrontProps {
  cardNumbers: string[];
  period: {
    month: string;
    year: string;
  };
  userName: string;
  cardCompany: string;
}

function CardFront({
  cardNumbers,
  period,
  userName,
  cardCompany,
}: CardFrontProps) {
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
    const cardNumber = cardNumbers.join('');

    if (cardNumber.length < 16) {
      return 'etc';
    }
    if (CARD_MARK_REGEX.visa.test(cardNumber)) {
      return 'visa';
    }
    if (CARD_MARK_REGEX.master.test(cardNumber)) {
      return 'master';
    }
    return 'etc';
  }

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.cardBox}
        style={{
          backgroundColor: cardCompany
            ? CARD_COLOR[cardCompany]
            : CARD_COLOR['기본'],
        }}
      >
        <div className={styles.cardWrap}>
          <section className={styles.top}>
            <img src={IMAGES.cardChip} alt="card chip" />
            <img
              src={CARD_MARK[getCardCompanyMark()].src}
              alt={CARD_MARK[getCardCompanyMark()].alt}
            />
          </section>
          <section className={styles.cardInfo}>
            <div className="card-number">{maskCardNumbers()}</div>
            <div className="period">
              {period.month && period.month.padStart(2, '0')}
              {period.month ? '/' : ''}
              {period.year && period.year.padStart(2, '0')}
            </div>
            <div className={styles.user}>{userName}</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
