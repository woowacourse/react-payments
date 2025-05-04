import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick = () => {} }: ButtonProps) => {
  return (
    <button className={`${styles.button} `} type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
