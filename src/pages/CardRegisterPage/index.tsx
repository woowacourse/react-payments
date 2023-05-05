import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/common/Title';
import CardRegisterSpinner from '../../components/CardRegisterSpinner';

import FinishProvider from '../../contexts/FinishContext';
import useCardFormValue from '../../hooks/useCardFormValue';
import type { CardData } from '../../types/card';

import styles from './cardRegisterPage.module.css';

interface Props {
  registerCard: (card: CardData) => void;
}

const CardRegisterPage = ({ registerCard }: Props) => {
  const navigate = useNavigate();
  const { company, number, owner, expiredDate } = useCardFormValue();

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

  useEffect(() => {
    registerCard(cardData);
  }, [cardData, registerCard]);

  return (
    <FinishProvider>
      <main className={styles.container}>
        <Title
          text={['카드 등록을 완료했습니다!', '카드를 등록 중입니다.']}
          change
        />
        <section className={styles.section}>
          <CardRegisterSpinner endCallback={navigateHome} />
        </section>
      </main>
    </FinishProvider>
  );
};

export default CardRegisterPage;
