import React from 'react';
import styles from './CardPreview.module.css';

const CardPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.chip} />
        <span className={styles.cardNumber}>1111 2222 3333 4444</span>
        <div className={styles.wrap}>
          <span className={styles.word}>NAME</span>
          <span className={styles.word}>MM/YY</span>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
