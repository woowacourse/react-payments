import { useEffect, useRef } from 'react';
import Spinner from '../../components/Spinner';

import styles from './waitingPage.module.css';
import { useNavigate } from 'react-router-dom';

const WAITING_DURATION = 1200;

const WaitingPage = () => {
  const navigate = useNavigate();
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      navigate('/');
    }, WAITING_DURATION);

    return () => {
      if (!timeoutId.current) return;

      clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Spinner />
      <h2 className={styles.loadingMessage}>카드를 등록중입니다.</h2>
    </div>
  );
};
export default WaitingPage;
