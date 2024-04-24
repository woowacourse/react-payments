import styles from './style.module.css';

export interface CardBackImgProps {
  cvc: string | null;
}
function CardBackImg(props: CardBackImgProps) {
  const { cvc } = props;
  return (
    <div className={styles.backImg}>
      <div className={styles.line}>
        <div className={styles.cvc}>{cvc}</div>
      </div>
    </div>
  );
}

export default CardBackImg;
