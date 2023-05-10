import Spinner from '../../../components/common/Spinner';
import Title from '../../../components/common/Title';

import styles from './cardRegisterLoading.module.css';

const CardRegisterLoading = () => {
  return (
    <>
      <Title>카드를 등록 중입니다.</Title>
      <section className={styles.section}>
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      </section>
    </>
  );
};

export default CardRegisterLoading;
