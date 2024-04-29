import styles from './ConfirmButton.module.css';

interface ConfirmButtonProps {
  label: string;
  onClickConfirmButton: React.MouseEventHandler<HTMLButtonElement>;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ label, onClickConfirmButton }) => {
  return (
    <button className={styles.button} type="button" onClick={onClickConfirmButton}>
      {label}
    </button>
  );
};

export default ConfirmButton;
