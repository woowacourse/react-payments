import Button from '../../components/Button/Button';
import styles from './CardRegisterSuccessPage.module.css';

export const CardRegisterSuccessPage = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['small-container']}>
        <img
          className={styles['check-image']}
          src="./check.png"
          alt="체크 아이콘"
        />
        <p className={styles.text}>5511로 시작하는 BC카드가 등록되었어요.</p>
        <Button text="확인" />
      </div>
    </div>
  );
};
