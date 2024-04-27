import styles from './style.module.css';

export interface CardBackSideProps {
  cvc: string | null;
}
function CardBackside(props: CardBackSideProps) {
  const { cvc } = props;
  return (
    <div className={styles.cardBackside}>
      <div className={styles.line}>
        <div className={styles.cvc}>{cvc}</div>
      </div>
    </div>
  );
}

export default CardBackside;
