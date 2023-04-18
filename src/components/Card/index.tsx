import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chip} />
      <p className={`${styles.cardNumber} text-card-number`}>카드번호</p>
      <div className={styles.detailContainer}>
        <p className="text-card-detail">이름</p>
        <p className="text-card-detail">만료일</p>
      </div>
    </div>
  );
};

export default Card;
