import CardItem from '../../components/CardItem';
import CardNameForm from '../../components/CardNameForm';

import styles from './cardNameRegisterPage.module.css';

const CardNameRegisterPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        카드 이름을 작성하고 등록을 완료해 주세요.
      </h1>
      <CardItem />
      <section className={styles.formContainer}>
        <CardNameForm />
      </section>
    </main>
  );
};

export default CardNameRegisterPage;
