import styles from './tooltipButton.module.css';

interface Props {
  tabIndex: number;
}

const TooltipButton = ({ tabIndex }: Props) => {
  return (
    <button
      type="button"
      className={styles.button}
      tabIndex={tabIndex}
      aria-label="CVC 툴팁 버튼"
    >
      <span className={styles.mark}>?</span>
    </button>
  );
};

export default TooltipButton;
