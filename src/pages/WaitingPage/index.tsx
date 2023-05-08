import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../../components/Spinner';

import { fetchCard } from '../../domain/remote/fetchCard';

import styles from './waitingPage.module.css';

const WaitingPage = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        await fetchCard();
      } catch (error) {
        if (error instanceof Error) {
          navigate('/error');
        }
      }

      navigate(`/complete/${cardId}`);
    };

    request();
  }, []);

  return (
    <div className={styles.container}>
      <Spinner />
      <h2 className={styles.loadingMessage}>
        카드를 등록중이에요. 잠시만 기다려 주세요.
      </h2>
    </div>
  );
};
export default WaitingPage;
