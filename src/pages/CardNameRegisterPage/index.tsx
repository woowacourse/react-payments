import CardItem from '../../components/CardItem';
import Input from '../../components/common/Input';

import styles from './cardNameRegisterPage.module.css';

const CardNameRegisterPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>카드 등록이 완료되었습니다.</h1>
      <CardItem />
      <form className={styles.inputContainer}>
        <Input type="text" align="center" />
        <button>확인</button>
      </form>
    </main>
  );
};

export default CardNameRegisterPage;
