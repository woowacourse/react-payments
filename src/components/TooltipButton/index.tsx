import styles from './tooltipButton.module.css';

const TooltipButton = () => {
  return (
    <button
      type="button"
      className={styles.button}
      aria-label="보안 코드(CVC/CVV)에 대한 상세 설명 툴팁"
    >
      <span className={styles.mark}>?</span>
    </button>
  );
};

export default TooltipButton;
