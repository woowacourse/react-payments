import styles from './spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.innerSpinner} />
    </div>
  );
};
export default Spinner;
