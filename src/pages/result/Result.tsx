import styles from './Result.module.css';

import CheckSvg from '@/core/assets/Check.svg?react';

import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { BANK_CONFIG } from '@/entities/card/bank';
import type { CardInfo } from '@/features/cardPreview/CardPreview';

export const Result = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: CardInfo };
  if (!state) return <Navigate to="/" replace />;

  const firstFour = state.cardNumbers[0];
  const bankLabel = BANK_CONFIG[state.bank].label;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CheckSvg />

        <div className={styles.messageBox}>
          <div className={styles.message}>{firstFour}로 시작하는</div>
          <div className={styles.message}>{bankLabel}가 등록되었어요.</div>
        </div>

        <button className={styles.button} onClick={() => navigate('/')}>
          확인
        </button>
      </div>
    </div>
  );
};
