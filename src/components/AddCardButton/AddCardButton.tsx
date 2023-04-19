import React from 'react';
import styles from './AddCardButton.module.css';
import { GrAdd } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const AddCardButton = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>새로운 카드를 등록해주세요.</p>
      <Link to="/card-registration">
        <button className={styles.card}>
          <GrAdd />
        </button>
      </Link>
    </div>
  );
};

export default AddCardButton;
