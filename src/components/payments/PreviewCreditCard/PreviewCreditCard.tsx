import useCreditCardLogo from '@hooks/creditCard/useCreditCardLogo';

import { Ellipse } from '@assets/images';

import styles from './PreviewCreditCard.module.css';

interface PreviewCreditCardProps {
  cardNumbers: string[];
  expiration: { year: string; month: string };
  ownerName: string;
}

const PreviewCreditCard: React.FC<PreviewCreditCardProps> = ({ cardNumbers, expiration, ownerName }) => {
  const [firstCardNumbers, secondCardNumbers, thirdCardNumbers, fourthCardNumbers] = cardNumbers;
  const { month, year } = expiration;

  const cardLogo = useCreditCardLogo(cardNumbers);

  const formattedMonth = month.length === 1 ? month.padStart(2, '0') : month;

  return (
    <div className={styles.creditCardContainer}>
      <div>
        <div className={styles.cardContainer}>
          <div className={`${styles.card} ${styles.icChip}`} />
          {cardLogo && (
            <div className={styles.card}>
              <img className={styles.creditCard} src={cardLogo} alt="Credit Card" />
            </div>
          )}
        </div>
        <div className={styles.cardDetailContainer}>
          <div className={`${styles.cardDetailText} ${styles.cardNumberContainer}`}>
            <span className={styles.cardNumberText}>{firstCardNumbers}</span>
            <span className={styles.cardNumberText}>{secondCardNumbers}</span>
            <span className={styles.password}>
              {Array.from({ length: thirdCardNumbers.length }, (_, i) => (
                <img key={`firstPassword-${i}`} width="4" height="4" src={Ellipse} alt="Password Dot" />
              ))}
            </span>
            <span className={styles.password}>
              {Array.from({ length: fourthCardNumbers.length }, (_, i) => (
                <img key={`secondPassword-${i}`} width="4" height="4" src={Ellipse} alt="Password Dot" />
              ))}
            </span>
          </div>
          <div className={styles.cardDetailText}>
            <span>{formattedMonth}</span>
            {(month + year).length > 2 ? '/' : ''}
            <span>{year}</span>
          </div>
          <div className={styles.cardDetailText}>
            <span>{ownerName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCreditCard;
