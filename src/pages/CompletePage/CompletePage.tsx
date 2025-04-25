import Button from '../../components/Button/Button';
import styles from './CompletePage.module.css';
export default function CompletePage() {
  return (
    <div className={styles.wrapper}>
      <img src="/images/checkIcon.png" />
      <h2>
        5511로 시작하는 <br />
        BC카드가 등록되었어요.
      </h2>
      <Button>확인</Button>
    </div>
  );
}
