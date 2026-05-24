import styles from './CardList.module.css';

export const CardListLoading = () => {
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>보유 카드</h1>
      <div className={styles.skeletonList} aria-label="카드 목록을 불러오는 중">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className={styles.skeletonCard} key={index}>
            <div className={styles.skeletonBox} />
            <div className={styles.skeletonText}>
              <div className={styles.skeletonLine} />
              <div className={styles.skeletonLine} />
              <div className={styles.skeletonLineShort} />
            </div>
          </div>
        ))}
        <div className={styles.skeletonAdd} />
      </div>
    </section>
  );
};
