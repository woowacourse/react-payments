import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span></span>
        <p>카드 등록 중입니다.</p>
      </div>
    </div>
  );
};

export default Spinner;
