import styles from './tooltipButton.module.css';

const TooltipButton = () => {
  return (
    <button type="button" className={styles.button} aria-label="CVC 툴팁 버튼">
      <span className={styles.mark}>?</span>
    </button>
  );
};

export default TooltipButton;
