import styles from './CardSpinner.module.css';

const CardSpinner = () => {
  return (
    <div className={styles.container}>
      <span className={`${styles.card} ${styles.blue}`}></span>
      <span className={`${styles.card} ${styles.yellow}`}></span>
      <span className={`${styles.card} ${styles.red}`}></span>
      <span className={styles.wallet}>
        <div className={styles.handle}>
          <span className={styles.pin}></span>
        </div>
      </span>
    </div>
  );
};

export default CardSpinner;
