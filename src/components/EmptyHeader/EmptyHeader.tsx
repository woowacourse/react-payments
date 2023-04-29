import styles from './EmptyHeader.module.css';

const EmptyHeader = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>보유 카드</h1>
    </header>
  );
};

export default EmptyHeader;
