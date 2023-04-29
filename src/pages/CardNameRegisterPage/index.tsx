import CardItem from '../../components/CardItem';
import CardNameForm from '../../components/CardNameForm';

import styles from './cardNameRegisterPage.module.css';

const CardNameRegisterPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>카드 등록이 완료되었습니다.</h1>
      <CardItem />
      <section className={styles.formContainer}>
        <CardNameForm />
      </section>
    </main>
  );
};

export default CardNameRegisterPage;
