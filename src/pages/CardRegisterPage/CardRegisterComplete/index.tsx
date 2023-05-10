import { useEffect } from 'react';
import CheckIcon from '../../../components/common/CheckIcon';
import Title from '../../../components/common/Title';

import styles from './cardRegisterComplete.module.css';
import useTimeout from '../../../hooks/useTimeout';
import type { PageProps } from '../types';

const CardRegisterComplete = ({ endCallback }: PageProps) => {
  const [endCallbackTimer] = useTimeout(endCallback, 1000);

  useEffect(() => {
    endCallbackTimer();
  }, [endCallbackTimer]);

  return (
    <>
      <Title>카드 등록을 완료했습니다!</Title>
      <section className={styles.section}>
        <div className={styles.checkContainer}>
          <CheckIcon />
        </div>
      </section>
    </>
  );
};

export default CardRegisterComplete;
