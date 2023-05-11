import Title from '../../components/common/Title';
import CardItem from '../../components/CardItem';
import CardNameForm from '../../components/CardNameForm';

import styles from './cardNameRegisterPage.module.css';

const CardNameRegisterPage = () => {
  return (
    <main className={styles.container}>
      <Title>카드 이름을 작성하고 등록을 완료해 주세요.</Title>
      <section className={styles.cardItemContainer}>
        <CardItem />
      </section>
      <section className={styles.formContainer}>
        <CardNameForm />
      </section>
    </main>
  );
};

export default CardNameRegisterPage;
