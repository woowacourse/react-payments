import styles from './Card.module.css';

export default function Card({ numbers }: { numbers: string[] }) {
  return (
    <div className={styles.card}>
      <div className={styles.chipWrapper}>
        <div className={styles.chip} />
        <img className={styles.cardLogo} src=""></img>
      </div>
      <div className={styles.cardNumberWrapper}>
        {numbers.map((number) => (
          <p className={styles.cardNumber}> {number}</p>
        ))}
      </div>
    </div>
  );
}
