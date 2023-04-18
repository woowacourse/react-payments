import styles from './EmptyHeader.module.css';

const EmptyHeader = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>보유 카드</p>
    </div>
  );
};

export default EmptyHeader;
