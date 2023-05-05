import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import useCardFormValue from '../../hooks/useCardFormValue';
import useTimeout from '../../hooks/useTimeout';
import type { CardData } from '../../types/card';

import styles from './cardRegisterPage.module.css';

interface Props {
  registerCard: (card: CardData) => void;
}

const CardRegisterPage = ({ registerCard }: Props) => {
  const { company, number, owner, expiredDate } = useCardFormValue();

  const navigate = useNavigate();

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

  const [navigateTimer] = useTimeout(navigateHome, 1000);

  useEffect(() => {
    registerCard(cardData);
  }, [cardData, registerCard]);

  useEffect(() => {
    navigateTimer();
  }, [navigateTimer]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>카드를 등록 중입니다.</h1>
      <section className={styles.formContainer}></section>
    </main>
  );
};

export default CardRegisterPage;
