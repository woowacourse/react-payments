import styles from './tooltipButton.module.css';

const TooltipButton = () => {
  return (
    <button type="button" className={styles.button}>
      <p className={styles.mark}>?</p>
    </button>
  );
};

export default TooltipButton;
