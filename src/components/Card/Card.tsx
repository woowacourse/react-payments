import { CARD_BRANDS, CardBrandType, CardNumberType, ExpirationType } from '../../App';
import styles from './Card.module.css';

export default function Card({ numbers, cardLogo, expiration }: { numbers: CardNumberType; cardLogo: keyof CardBrandType | null; expiration: ExpirationType }) {
  return (
    <div className={styles.card}>
      <div className={styles.chipWrapper}>
        <div className={styles.chip} />

        {cardLogo && <img className={styles.cardLogo} src={CARD_BRANDS[cardLogo].logo} />}
      </div>
      <div className={styles.numberWrapper}>
        <div className={styles.cardNumberWrapper}>
          {[numbers.first, numbers.second].map(({ value }, index) => (
            <p className={styles.cardNumber} key={index}>
              {value}
            </p>
          ))}

          {[numbers.third, numbers.fourth].map(({ value }, i) => (
            <div key={i} className={styles.dotWrapper}>
              {Array.from({ length: value.length }).map((_, j) => (
                <Dot key={j} />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.cardNumber}>
          {expiration.year.value}
          {expiration.year.value && '/'}
          {expiration.month.value}
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return <div className={styles.dot}></div>;
}
