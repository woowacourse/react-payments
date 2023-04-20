import styles from './tooltipButton.module.css';

interface Props {
  tabIndex: number;
}

const TooltipButton = ({ tabIndex }: Props) => {
  return (
    <button type="button" className={styles.button} tabIndex={tabIndex}>
      <p className={styles.mark}>?</p>
    </button>
  );
};

export default TooltipButton;
