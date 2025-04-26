import { CardLogo, CardExpiration, CardNumber, CardCompany } from '../../types/card';
import styles from './CardPreview.module.css';

type Props = {
  numbers: CardNumber;
  cardLogo: CardLogo;
  cardCompany: CardCompany;
  cardExpiration: CardExpiration;
};

export default function CardPreview({ numbers, cardLogo, cardCompany, cardExpiration }: Props) {
  const numberKeys: (keyof CardNumber)[] = ['first', 'second', 'third', 'fourth'];
  const bgColorName = cardCompany ? `--color-card-${cardCompany}` : '--color-black';

  return (
    <div className={styles.card} style={{ background: `var(${bgColorName})` }}>
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
          {cardExpiration.month}
          {cardExpiration.month && '/'}
          {cardExpiration.year}
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return <div className={styles.dot} />;
}
