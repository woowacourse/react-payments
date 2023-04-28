import Header from '../../components/common/Header';
import CardRegisterForm from '../../components/CardRegisterForm';

import type { CardInfo } from '../../types/card';

import styles from './cardRegisterPage.module.css';

interface Props {
  registerCard: (card: CardInfo) => void;
}

const CardRegisterPage = ({ registerCard }: Props) => {
  return (
    <>
      <Header title="카드 추가" previousButton />
      <main className={styles.formContainer}>
        <CardRegisterForm registerCard={registerCard} />
      </main>
    </>
  );
};

export default CardRegisterPage;
