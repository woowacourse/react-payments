import { CardLogo, Expiration, CardNumber } from '../../types/card';
import styles from './CardPreview.module.css';

export default function CardPreview({
  numbers,
  cardLogo,
  expiration
}: {
  numbers: CardNumber;
  cardLogo: CardLogo;
  expiration: Expiration;
}) {
  const numberKeys: (keyof CardNumber)[] = ['first', 'second', 'third', 'fourth'];

  return (
    <div className={styles.card}>
      <div className={styles.chipWrapper}>
        <div className={styles.chip} />

        {cardLogo && (
          <img
            className={styles.cardLogo}
            src={cardLogo === 'visa' ? 'images/visa.jpg' : 'images/mastercard.jpg'}
            alt={cardLogo === 'visa' ? 'visa logo' : 'mastercard logo'}
          />
        )}
      </div>
      <div className={styles.numberWrapper}>
        <div className={styles.cardNumberWrapper}>
          {numberKeys.slice(0, 2).map((key) => (
            <p className={styles.cardNumber} key={key}>
              {numbers[key]}
            </p>
          ))}
          {numberKeys.slice(2).map((key) => (
            <div key={key} className={styles.dotWrapper}>
              {Array.from({ length: numbers[key].length }).map((_, i) => (
                <Dot key={i} />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.cardNumber}>
          {expiration.month}
          {expiration.month && '/'}
          {expiration.year}
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return <div className={styles.dot}></div>;
}
