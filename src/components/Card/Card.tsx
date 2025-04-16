import styles from './Card.module.css';

export default function Card({ numbers, cardLogo }: { numbers: string[]; cardLogo: 'visa' | 'master' | '' }) {
  return (
    <div className={styles.card}>
      <div className={styles.chipWrapper}>
        <div className={styles.chip} />

        {cardLogo === '' ? null : (
          <img className={styles.cardLogo} src={cardLogo === 'visa' ? 'images/visa.jpg' : 'images/mastercard.jpg'} />
        )}
      </div>
      <div className={styles.cardNumberWrapper}>
        {numbers.slice(0, 2).map((number) => (
          <p className={styles.cardNumber}> {number}</p>
        ))}
        {numbers.slice(2).map((number, i) => (
          <p key={i} className={styles.cardNumber}>
            {'・'.repeat(number.length)}
          </p>
        ))}
      </div>
    </div>
  );
}
