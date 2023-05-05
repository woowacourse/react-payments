import { useNavigate } from 'react-router-dom';

import Title from '../../components/common/Title';
import CardRegisterSpinner from '../../components/CardRegisterSpinner';

import FinishProvider from '../../contexts/FinishContext';
import useCardRegister from './hooks/useCardRegister';
import type { CardData } from '../../types/card';

import styles from './cardRegisterPage.module.css';

interface Props {
  registerCard: (card: CardData) => void;
}

const CardRegisterPage = ({ registerCard }: Props) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  useCardRegister(registerCard);

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
