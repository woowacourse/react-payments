import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useCardFormValue from '../../hooks/useCardFormValue';
import useTimeout from '../../hooks/useTimeout';
import type { CardData } from '../../types/card';

import styles from './cardRegisterPage.module.css';
import Spinner from '../../components/common/Spinner';
import CheckIcon from '../../components/common/CheckIcon';

interface Props {
  registerCard: (card: CardData) => void;
}

const CardRegisterPage = ({ registerCard }: Props) => {
  const { company, number, owner, expiredDate } = useCardFormValue();
  const [isFinish, setIsFinish] = useState(false);

  const navigate = useNavigate();

  const finishWork = () => {
    setIsFinish(true);
  };

  const navigateHome = () => {
    navigate('/');
  };

  const cardData: CardData = useMemo(
    () => ({
      name: 'test',
      company: company ?? 'BC카드',
      number: { first: number.first, second: number.second },
      expiredDate,
      owner,
    }),
    [company, expiredDate, number.first, number.second, owner],
  );

  const [finishTimer] = useTimeout(finishWork, 2000);
  const [navigateTimer] = useTimeout(navigateHome, 1000);

  useEffect(() => {
    registerCard(cardData);
  }, [cardData, registerCard]);

  useEffect(() => {
    finishTimer();
  }, [finishTimer]);

  useEffect(() => {
    if (isFinish) {
      navigateTimer();
    }
  }, [isFinish, navigateTimer]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        {isFinish ? '카드 등록을 완료했습니다!' : '카드를 등록 중입니다.'}
      </h1>
      <div className={styles.spinnerContainer}>
        {isFinish ? <CheckIcon /> : <Spinner />}
      </div>
    </main>
  );
};

export default CardRegisterPage;
