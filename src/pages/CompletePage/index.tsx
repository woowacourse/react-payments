import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Card from '../../components/Card';
import Spacer from '../../components/common/Spacer';
import ErrorPage from '../ErrorPage';

import useCountdown from '../../utils/hooks/useCountdown';
import { useCardsContext } from '../../domain/context/CardsContext';

import styles from './completePage.module.css';

const CompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardId } = useParams();
  const { cards } = useCardsContext();
  const { count } = useCountdown(3, () =>
    navigate('/', { state: { from: location } }),
  );
  const card = cards.find((card) => card.id === cardId);

  if (card === undefined) {
    navigate('/error');
    return <ErrorPage />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.cardWrapper}>
          <Card {...card} />
        </div>
        <Spacer height={42} />
        <h2 className={styles.completeMessage}>카드 등록을 완료했어요.</h2>
        <Spacer height={20} />
        <h2 className={styles.completeMessage}>
          <time>{count}초</time> 후에 카드 목록 페이지로 이동할게요.
        </h2>
        <Spacer height={30} />
        <button
          onClick={() => navigate('/', { state: { from: location } })}
          className={styles.completeButton}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default CompletePage;
