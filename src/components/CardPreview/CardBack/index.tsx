import styles from './style.module.css';

interface CardBackProps {
  CVCNumber: string;
}

function CardBack({ CVCNumber }: CardBackProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBox}>
        <div className={styles.cardInfo}>
          <div className={styles.cvcNumber}>
            <div>{CVCNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBack;
