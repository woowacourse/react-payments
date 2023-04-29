import CardItem from '../../components/CardItem';
import CardNameForm from '../../components/CardNameForm';

import type { CardData } from '../../types/card';

import styles from './cardNameRegisterPage.module.css';

interface Props {
  registerCard: (card: CardData) => void;
}

const CardNameRegisterPage = ({ registerCard }: Props) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>카드 등록이 완료되었습니다.</h1>
      <CardItem />
      <section className={styles.formContainer}>
        <CardNameForm registerCard={registerCard} />
      </section>
    </main>
  );
};

export default CardNameRegisterPage;
