import { useConfirmButton } from '../../../context/ConfirmButtonContext';
import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick = () => {} }: ButtonProps) => {
  const { isActive } = useConfirmButton();

  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ''}`}
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
