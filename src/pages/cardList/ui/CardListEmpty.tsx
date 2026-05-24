import styles from './CardList.module.css';

interface CardListEmptyProps {
  onAddCard: () => void;
}

export const CardListEmpty = ({ onAddCard }: CardListEmptyProps) => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>보유 카드</h1>
      <div className={styles.center}>
        <div className={styles.emptyImage} aria-hidden="true" />
        <p className={styles.message}>등록된 카드가 없습니다</p>
        <p className={styles.description}>아래 버튼을 눌러 첫 카드를 등록해보세요</p>
        <button className={styles.primaryButton} type="button" onClick={onAddCard}>
          카드 추가하기
        </button>
      </div>
    </section>
  );
};
