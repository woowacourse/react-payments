import styles from './Card.module.css';

export default function Card({
  numbers,
  cardLogo,
  expiration
}: {
  numbers: string[];
  cardLogo: 'visa' | 'master' | '';
  expiration: string[];
}) {
  return (
    <div className={styles.card}>
      <div className={styles.chipWrapper}>
        <div className={styles.chip} />

        {cardLogo === '' ? null : (
          <img
            className={styles.cardLogo}
            src={cardLogo === 'visa' ? 'images/visa.jpg' : 'images/mastercard.jpg'}
            alt={cardLogo === 'visa' ? 'visa logo' : 'mastercard logo'}
          />
        )}
      </div>
      <div className={styles.numberWrapper}>
        <div className={styles.cardNumberWrapper}>
          {numbers.slice(0, 2).map((number, index) => (
            <p className={styles.cardNumber} key={index}>
              {number}
            </p>
          ))}
          {numbers.slice(2).map((number, i) => (
            <div key={i} className={styles.dotWrapper}>
              {Array.from({ length: number.length }).map((_, j) => (
                <Dot key={j} />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.cardNumber}>
          {expiration[0]}
          {expiration[0] && '/'}
          {expiration[1]}
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return <div className={styles.dot}></div>;
}
