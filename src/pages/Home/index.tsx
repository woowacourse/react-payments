import React from 'react';
import { Link } from 'react-router-dom';

import { PATH } from '../../constants';

import styles from './style.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Link to={PATH.cardEnrollment}>카드 등록하러 가기</Link>
    </div>
  );
}
