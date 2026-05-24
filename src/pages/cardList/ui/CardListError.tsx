import styles from './CardList.module.css';

interface CardListErrorProps {
  onRetry: () => void;
}

export const CardListError = ({ onRetry }: CardListErrorProps) => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>보유 카드</h1>
      <div className={styles.center}>
        <div className={styles.errorIcon} aria-hidden="true">
          !
        </div>
        <p className={styles.message}>카드 목록을 불러올 수 없어요</p>
        <p className={styles.description}>잠시 후 다시 시도해 주세요.</p>
        <button className={styles.primaryButton} type="button" onClick={onRetry}>
          다시 시도
        </button>
      </div>
    </section>
  );
};
